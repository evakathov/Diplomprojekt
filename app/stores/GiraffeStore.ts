import { makeAutoObservable, runInAction } from "mobx";

//API test class for cheking the if we are able to fetch from data the endpoint (the data is hardcoded and not from the DB)
//can be deleted
const baseUrl = process.env.NODE_ENV === 'development'  
    //?"http://localhost:8080/" :
    ?"https://test-app.donor.4a4b.dk/" : 
    ""; //Check if dev environment

class GiraffeStore {
    giraffes = ["Loading giraffes"];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchGiraffes();
    }

    async fetchGiraffes() {
        try {
            const response = await fetch(baseUrl + "api/giraffes");
            const json = await response.json();
            runInAction(() => {
                this.giraffes = json;
            });
        } catch (error) {
            console.error("Failed to fetch giraffes:", error);
        }
    }
}

export default new GiraffeStore();

