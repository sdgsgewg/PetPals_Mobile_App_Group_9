import React from "react";
import { View, StyleSheet } from "react-native";

const BigHeroContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // Equivalent to bg-gray-100
    paddingTop: 64, // Approximate for pt-16
    paddingBottom: 96, // Approximate for pb-24
  },
});

export default BigHeroContent;
