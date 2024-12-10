
// import { makeAutoObservable } from "mobx";

// const baseUrl =
//   process.env.NODE_ENV === "development" ? "http://localhost:8080/" : ""; // Check if dev

// const Loginstates = {
//   LOGGING_IN: "Loading",
//   LOGGEDOUT: "LoggedOut",
//   LOGGED_IN: "LoggedIn",
// };

// class TokenStore {
//     state = Loginstates.LOGGEDOUT;
//     token: string | null = null; // Angiver korrekt type
  
//     logindata = { username: "", password: "" };
  
//     constructor() {
//       makeAutoObservable(this);
//       const savedToken = localStorage.getItem("authToken");
//       this.token = savedToken ? savedToken : null; // Sætter token til null, hvis ingen findes
//       if (this.token) {
//         this.state = Loginstates.LOGGED_IN; // Opdaterer til LOGGED_IN, hvis en token allerede findes
//       }
//     }
  
//     async doLogin() {
//       this.state = Loginstates.LOGGING_IN;
//       try {
//         const response = await fetch(baseUrl + "api/login", {
//           method: "POST",
//           body: JSON.stringify(this.logindata),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
  
//         if (response.ok) {
//           const token = await response.text();
//           this.token = token;
//           localStorage.setItem("authToken", token);
//           this.state = Loginstates.LOGGED_IN;
//         } else {
//           this.state = Loginstates.LOGGEDOUT;
//           console.error("Login failed");
//         }
//       } catch (error) {
//         this.state = Loginstates.LOGGEDOUT;
//         console.error("Error during login:", error);
//       }
//     }
  
//     logout() {
//       this.token = null;
//       localStorage.removeItem("authToken");
//       this.state = Loginstates.LOGGEDOUT;
//     }
//   }
// export const tokenStore = new TokenStore();
