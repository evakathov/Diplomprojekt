import React, { useEffect } from "react";
import { View, Text } from "react-native";

const FetchUser = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/users/queryName")
      .then((res) => console.log("Status:", res.status))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <View>
      <Text>Fetching Test...</Text>
    </View>
  );
};

export default FetchUser;
