import { makeAutoObservable, runInAction } from "mobx";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://test-app.donor.4a4b.dk/" // Replace with dev URL if needed
    : "";

interface Donor {
  InterviewInformation: any;
  donorId: number;
  firstName: string;
  qualificationSteps: QualificationStep[];
}

interface QualificationStep {
  qualificationStepID: number;
  stepNumber: number;
  title: string;
  isCompleted: boolean;
  metaDataList: MetaData[];
}

interface MetaData {
  subStepID: number;
  isCompleted: boolean;
  metaDataTemplate: MetaDataTemplate;
}

interface MetaDataTemplate {
  templateID: number;
  infoText: string;
}

class DonorStore {
  donorObject: Donor | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchDonor(donorId: number) {
    try {
      const response = await fetch(`${baseUrl}api/donors/${donorId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch donor with ID ${donorId}: ${response.statusText}`);
      }

      const donorData = await response.json();
      runInAction(() => {
        this.donorObject = donorData;
      });
    } catch (error) {
      console.error("Failed to fetch donor:", error);
      runInAction(() => {
        this.donorObject = null; // Clear donor data on error
      });
    }
  }
}

export default new DonorStore();


