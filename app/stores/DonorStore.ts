import { makeAutoObservable, runInAction } from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? 
//"http://localhost:8080/"   : 
"https://test-app.donor.4a4b.dk/" : 
    
""; //Check if dev environment

interface Donor{
    InterviewInformation: any;
    donorId: number;
    firstName: string;
    qualificationSteps: QualificationStep[]
}
interface QualificationStep{
    qualificationStepID: number;
    stepNumber: number;
    title: string;
    isCompleted: boolean;
    metaDataList: MetaData[]
    //iconName: string;
}
interface MetaData{
    subStepID: number;
    isCompleted: boolean;
    metaDataTemplate: MetaDataTemplate   
}

interface MetaDataTemplate{
    templateID: number;
    infoText: string;   
}

class DonorStore {
    donor = ["Loading donors"];
    donorObject: Donor|null = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchDonor(1152); 
    }

    async updateStep(StepId: number) {
        const apiUrl = `${baseUrl}api/donors/${StepId}/completed/${true}`;
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

    async fetchDonor(arg0: number) {
        try{
            const response = await fetch(baseUrl + "api/donors/" + arg0)
            const json = await response.json();
            this.donorObject = json;
        }
        catch (error) {
            console.error("Failed to fetch donor:", error);}
    }
}
export default new DonorStore();

