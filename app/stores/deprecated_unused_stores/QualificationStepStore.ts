 import { makeAutoObservable, runInAction } from "mobx";

//Previouse implementation of fetching the donor qualificationstep, using the donorQualificationStepDTO object manually defined. 
const baseUrl = process.env.NODE_ENV === 'development' ? 
    "https://test-app.donor.4a4b.dk/" : 
    ""; //Check if dev environment

interface DonorQualificationStepDTO {
    firstName: string;
    stepNumber: number;
    stepTitle: string;
    isCompleted: boolean;
    //iconName: string;
}

class QualificationStepStore {/*
    donorStep: DonorQualificationStepDTO[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchDonorQualStep();
    }

    async fetchDonorQualStep() {
        try {
            const response = await fetch(baseUrl + "api/qualificationstep");
            const json: DonorQualificationStepDTO[] = await response.json();
            // console.log("Fetched data", json);
            runInAction(() => {
                this.donorStep = json;
            });
        } catch (error) {
            console.error("Failed to fetch donor and his step:", error);
        }
    }
        */
}

export default new QualificationStepStore();
 