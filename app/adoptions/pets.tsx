import {
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

interface INewPet {
  petId?: number;
  name: string;
  breed: string;
  age: number;
  gender: string;
  speciesId: number;
  description: string;
  price: number;
  imageUrl?: string;
  ownerId: number;
}

export default function AdoptionList() {
  const [pets, setPets] = useState<INewPet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdoptionList = async () => {
      try {
        const response = await fetch("https://localhost:7249/api/v1/adoption-list");
        if (!response.ok) {
          throw new Error("Failed to fetch adoption list");
        }
        const data: INewPet[] = await response.json();
        setPets(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptionList();
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
        <ThemedText type="title">Daftar Hewan untuk Adopsi</ThemedText>
      </ThemedView>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <ThemedText type="default">{error}</ThemedText>
      ) : (
        <FlatList
          data={pets}
          keyExtractor={(item) => (item.petId ? item.petId.toString() : Math.random().toString())}
          renderItem={({ item }) => (
            <ThemedView style={styles.petCard}>
              {item.imageUrl ? (
                <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <ThemedText>No Image</ThemedText>
                </View>
              )}
              <ThemedText type="subtitle">{item.name}</ThemedText>
              <ThemedText>{item.breed}</ThemedText>
              <ThemedText>Gender: {item.gender}</ThemedText>
              <ThemedText>Umur: {item.age} tahun</ThemedText>
              <ThemedText>Harga: Rp {item.price.toLocaleString()}</ThemedText>
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
  petCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
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
