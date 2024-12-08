import { makeAutoObservable, runInAction } from "mobx";

const baseUrl =
  process.env.NODE_ENV === "development"
    //?"http://localhost:8080/":
    ? "https://test-app.donor.4a4b.dk/" : 
    "";

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

  donor = ["Loading donor"];
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

    //The update function for the subStep isCompleted value 
    async updateSubStep(StepId: number) {
        const apiUrl = `${baseUrl}api/donors/${StepId}/substep-completed/${true}`;
        console.log("Updating step:", apiUrl);
      
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
          });
      
          if (!response.ok) {
            throw new Error(`Failed to update step ${StepId}: ${response.statusText}`);
          }
      
          console.log(`Step ${StepId} marked as completed.`);
        } catch (error) {
          console.error("Failed to update step:", error);
          throw error; // Propagate the error to handle it in the UI
        }
      }
      
          //The update function for the subStep isCompleted value 
    async updateStep(donorId: number, stepNumber: number) {
      const apiUrl = `${baseUrl}api/donors/${donorId}/step-completed/${stepNumber}/${true}`;
      console.log("Updating step:", apiUrl);
    
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
        });
    
        if (!response.ok) {
          throw new Error(`Failed to update step for donor: ${donorId}: ${response.statusText}`);
        }
    
        console.log(`Step ${stepNumber} marked as completed, for donor: ${donorId}`);
      } catch (error) {
        console.error("Failed to update step:", error);
        throw error; // Propagate the error to handle it in the UI
      }
    }
}

export default new DonorStore();


