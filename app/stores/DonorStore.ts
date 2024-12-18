import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";

const baseUrl =
  process.env.NODE_ENV === "development"
    //?"http://localhost:8080/":
    ?"https://test-app.donor.4a4b.dk/" : 
    "";

interface Donor {
  InterviewInformation: any; //why do we have this?
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

  //Method for getting token from the AsyncStorage adding it to a header and returning the header
  //necessary for authenticating our api calls
  private async getAuthHeaders() {
    const token = await AsyncStorage.getItem("esbToken");
    return {
      headers: {
        "Authorization": token ?? ""
      }
    };
  }

  //Fetching a donor with his related information
  async fetchDonor(donorId: number) {
    try {
      const options = await this.getAuthHeaders();
      const response = await fetch(`${baseUrl}api/donors/${donorId}`, options);

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
    //Post method for updating the completion feild in a main step/qualicationstep
    async updateStep(donorId: number, stepNumber: number) {
      try {
        const options = await this.getAuthHeaders();
        const apiUrl = `${baseUrl}api/donors/${donorId}/step-completed/${stepNumber}/${true}`;
        console.log("Updating step:", apiUrl);
  
        const response = await fetch(apiUrl, {
          method: "POST",
          ...options,
        });
  
        if (!response.ok) {
          throw new Error(`Failed to update step for donor: ${donorId}: ${response.statusText}`);
        }
  
        console.log(`Step ${stepNumber} marked as completed, for donor: ${donorId}`);
      } catch (error) {
        console.error("Failed to update step:", error);
        throw error;
      }
    }

  //Post method for updating the completion feild in a substep/metadata
  async updateSubStep(StepId: number) {
    try {
      const options = await this.getAuthHeaders();
      const apiUrl = `${baseUrl}api/donors/${StepId}/substep-completed/${true}`;
      console.log("Updating step:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Failed to update step ${StepId}: ${response.statusText}`);
      }

      console.log(`Step ${StepId} marked as completed.`);
    } catch (error) {
      console.error("Failed to update step:", error);
      throw error;
    }
  }
}
export default new DonorStore();



