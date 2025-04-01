// app/auth/register.tsx
import React from "react";
import { View, Text } from "react-native";
import AuthForm from "../components/Authentication/AuthForm";

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Register
      </Text>
      <AuthForm authType="Register" />
    </View>
  );
};

export default Register;
