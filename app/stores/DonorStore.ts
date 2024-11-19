import { makeAutoObservable, runInAction } from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? 
"http://localhost:8080/"   : 
//"https://test-app.donor.4a4b.dk/" : 
    ""; //Check if dev environment
interface Donor{
    qualificationSteps: QualificationStep[    ]

}
interface QualificationStep{
    metaDataList: MetaData[]
}
interface MetaData{
    metaDataTemplate: MetaDataTemplate
}
interface MetaDataTemplate{
    
}

class DonorStore {
    donor = ["Loading donors"];
    donorObject: Donor|null = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchDonors();
        this.fetchDonor(502); this.updateStep(100)
    }
    async updateStep(StepId: number)
    {try{
        const response = await fetch(baseUrl + "api/qualificationstep/" + StepId + "/completed/" + true, {
            method:"POST"
        })
    }
    catch (error) {
        console.error("Failed to fetch number:", error);}

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

    async fetchDonors() {
        try {
            const response = await fetch(baseUrl + "api/donors");
            const json = await response.json();
            runInAction(() => {
                this.donor = json;
            });
        } catch (error) {
            console.error("Failed to fetch donors:", error);
        }
    }
}

export default new DonorStore();

