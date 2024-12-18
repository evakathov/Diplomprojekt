import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "";

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
      console.error("Failed to load token from storage:", error);
    }
  }

  // Perform login
  async doLogin() {
    this.state = LoginStates.LOGGING_IN;

    try {
      const response = await fetch(`${baseUrl}api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.logindata),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const token = await response.text();
      this.token = token;

      // Save token to AsyncStorage
      await AsyncStorage.setItem("esbToken", token);
      this.state = LoginStates.LOGGED_IN;
      console.log(this.state)

    } catch (error) {
      console.error("Login failed:", error);
      this.state = LoginStates.LOGGEDOUT;
      this.token = null;
    }
  }

  // Logout and clear the token
  async logout() {
    try {
      await AsyncStorage.removeItem("esbToken");
      this.token = null;
      this.state = LoginStates.LOGGEDOUT;
    } catch (error) {
      console.error("Failed to remove token:", error);
    }
  }
}
export const tokenStore = new TokenStore();


