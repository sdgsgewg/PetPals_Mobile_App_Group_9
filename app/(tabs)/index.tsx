import { StyleSheet, Platform, TouchableOpacity, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { useUsers } from "../context/users/UsersContext";

export default function HomeScreen() {
  const router = useRouter();

  const { isLoggedIn, loggedInUser } = useUsers();

  const handlePets = () => {
    // Handle login action here
    console.log("Login pressed");
    router.push("/adoptions/pets");
  };

  const handleServices = () => {
    // Handle register action here
    console.log("Register pressed");
    router.push("/services/services");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Home</ThemedText>
      </ThemedView>
      {isLoggedIn ? (
        <ThemedText>{`Welcome back, ${loggedInUser.name}`}</ThemedText>
      ) : (
        <ThemedText>Home Page.</ThemedText>
      )}

      {/* Custom Login and Register Buttons */}
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePets}>
          <Text style={styles.buttonText}>Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleServices}>
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Shadow for Android
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
