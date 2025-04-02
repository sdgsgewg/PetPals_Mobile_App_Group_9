import React from "react";
import { View, Text } from "react-native";
import AuthForm from "../components/Authentication/AuthForm";
const login = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Login
        </Text>
        <AuthForm authType="Login" />
      </View>
    );
  };

  export default login;