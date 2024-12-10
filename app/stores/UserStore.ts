import { makeAutoObservable, runInAction } from "mobx";

class UserStore {
  users: any[] = [];
  status: number | null = null;
  errorMessage: string | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true }); // Auto-bind metoder og gør observable
  }

  async fetchUsers() {
    const apiUrl = "http://localhost:8080/api/users/query"; // Backend-URL

    try {
      const response = await fetch(apiUrl);

      runInAction(() => {
        this.status = response.status; // Gem statuskoden
      });

      if (!response.ok) {
        // Hvis respons ikke er OK, gem fejlbeskeden
        const errorText = await response.text();
        runInAction(() => {
          this.errorMessage = errorText;
          this.users = []; // Tøm brugerlisten, hvis der er fejl
        });
      } else {
        // Hvis respons er OK, gem brugerdata
        const jsonData = await response.json();
        runInAction(() => {
          this.users = jsonData;
          this.errorMessage = null; // Ryd tidligere fejl
        });
      }
    } catch (error) {
      // Håndter netværksfejl
      runInAction(() => {
        this.errorMessage = "Network error occurred";
        this.status = null;
        this.users = [];
      });
      console.error("Network error:", error);
    }
  }
}

export const userStore = new UserStore();
