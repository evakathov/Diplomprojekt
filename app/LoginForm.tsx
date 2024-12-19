// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { observer } from "mobx-react-lite";
// import { tokenStore } from "@/app/stores/TokenStore";

// const LoginForm = observer(() => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     tokenStore.logindata = { username, password };
//     tokenStore.doLogin();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <View style={styles.status}>
//         <Text>Status: {tokenStore.state}</Text>
//       </View>
//     </View>
//   );
// });

// export default LoginForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   input: {
//     width: "80%",
//     padding: 10,
//     marginBottom: 16,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   status: {
//     marginTop: 16,
//   },
// });
