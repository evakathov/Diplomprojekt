import { makeAutoObservable, runInAction } from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? 
    "https://test-app.donor.4a4b.dk/" : 
    ""; //Check if dev environment

class DonorStore {
    donor = ["Loading donors"];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchDonors();
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

