import React from "react";
import { Button } from "react-native";

const CheckUserQuery = () => {
  const handleCheck = () => {
    fetch("http://localhost:8080/api/users/query")
      .then((res) => console.log("Status code:", res.status))
      .catch((error) => console.error("Error:", error));
  };

  return <Button title="Check User Query" onPress={handleCheck} />;
};

export default CheckUserQuery;
