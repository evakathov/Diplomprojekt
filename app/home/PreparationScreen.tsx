import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { userStore } from "../stores/deprecated_unused_stores/UserStore";
/* 
const UserScreen = observer(() => {
  useEffect(() => {
    userStore.fetchUsers(); // Hent brugere, når komponenten indlæses
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Fetch Users" onPress={userStore.fetchUsers} />
      {userStore.status && <Text>Status: {userStore.status}</Text>}
      {userStore.errorMessage ? (
        <Text style={styles.error}>Error: {userStore.errorMessage}</Text>
      ) : (
        <FlatList
          data={userStore.users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>} // Tilpas baseret på dataformat
        />
      )}
    </View>
  );
});
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default UserScreen;
*/

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

const PreparationScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}>Hej, dette er PreparationScreen!</Text>
  //     </View>
  //   );
  // };
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   text: {
  //     fontSize: 24,
  //     fontWeight: "bold",
  //   },
};

export default PreparationScreen;
