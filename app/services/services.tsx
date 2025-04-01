import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useServices } from "../context/services/ServicesContext";

export default function Services() {
  const { services, fetchServices, loading, error } = useServices();

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Daftar Layanan Hewan Peliharaan</ThemedText>
      </ThemedView>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <ThemedText type="error">{error}</ThemedText>
      ) : (
        <FlatList
          data={services}
          keyExtractor={(item) => item.serviceId.toString()}
          renderItem={({ item }) => (
            <ThemedView style={styles.serviceCard}>
              {/* <Image source={{ uri: item.image }} style={styles.petImage} /> */}
              <ThemedText type="subtitle">{item.name}</ThemedText>
              <ThemedText>{item?.category?.name}</ThemedText>
              <ThemedText>Alamat: {item.address}</ThemedText>
            </ThemedView>
          )}
        />
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  serviceCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
