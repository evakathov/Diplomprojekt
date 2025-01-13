import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = process.env.NODE_ENV === "development" 
//? "http://localhost:8082/" : "";
?"https://test-app.donor.4a4b.dk/" : "";

export enum LoginStates {
  LOGGING_IN = "Loading",
  LOGGEDOUT = "Logout",
  LOGGED_IN = "LoggedIn",
}

class TokenStore {
  state: LoginStates = LoginStates.LOGGEDOUT;
  token: string | null = null;
  logindata: { username: string; password: string } = { username: "", password: "" };

  constructor() {
    makeAutoObservable(this);
    this.initializeToken(); // Load the token on initialization
  }

  // Initialize token from AsyncStorage
  // The function checks if a Token is already stored, so a user does not have to login again
  async initializeToken() { 
    try {
      const token = await AsyncStorage.getItem("esbToken");
      if (token) {
        this.token = token;
        this.state = LoginStates.LOGGED_IN;
      }
    } catch (error) {
      //console.error("Failed to load token from storage:", error);
    }
  }

  // Perform login
  async doLogin() {
    console.log("Starting login process");
    this.state = LoginStates.LOGGING_IN;
    console.log("State set to LOGGING_IN");

    try {
        console.log("Sending login request to API");
        const response = await fetch(`${baseUrl}api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.logindata),
        });

        console.log("Response received from API");
        
        if (!response.ok) {
            console.error("Login failed: Invalid login credentials");
            throw new Error("Invalid login credentials");
        }

        console.log("Login successful, parsing token");
        const token = await response.text();
        this.token = token;

        console.log("Saving token to AsyncStorage");
        await AsyncStorage.setItem("esbToken", token);
        this.state = LoginStates.LOGGED_IN;
        console.log("State set to LOGGED_IN, login process complete");
        
    } catch (error) {
        console.error("Login failed:", error);
        this.state = LoginStates.LOGGEDOUT;
        this.token = null;
        console.log("State set to LOGGEDOUT, token cleared");
    }
  }
  // Logout and clear the token
  async logout() {
    try {
      await AsyncStorage.removeItem("esbToken");
      this.token = null;
      this.state = LoginStates.LOGGEDOUT;
      console.log(this.state)
    } catch (error) {
      console.error("Failed to remove token:", error);
    }
  }
}
export const tokenStore = new TokenStore();
export default tokenStore;


