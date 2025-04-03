import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

interface ItemDetailCardProps {
  itemType: string;
  imageUrl: string | null;
  status?: string | null;
  price: string | null;
  isAdopted?: boolean;
  onClick: () => void;
}

const ItemDetailCard: React.FC<ItemDetailCardProps> = ({
  itemType,
  imageUrl,
  status = null,
  price,
  isAdopted = false,
  onClick,
}) => {
  const isPet = itemType === "pet";
  return (
    <ScrollView style={styles.detailCard}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.title}>{data.name}</Text>
      {isPet ? (
        <>
          <Text style={styles.text}>Species: {data?.species?.name}</Text>
          <Text style={styles.text}>Breed: {data.breed}</Text>
          <Text style={styles.text}>Age: {data.age} years</Text>
          <Text style={styles.text}>Gender: {data.gender}</Text>
          <Text style={styles.text}>Status: {status}</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>Category: {data?.category?.name}</Text>
          <Text style={styles.text}>Address: {data.address}</Text>
          <Text style={styles.text}>City: {data.city}</Text>
        </>
      )}
      <Text style={styles.price}>Price: Rp {price}</Text>
      <TouchableOpacity
        style={[styles.button, isAdopted ? styles.disabledButton : {}]}
        onPress={onClick}
        disabled={isAdopted}
      >
        <Text style={styles.buttonText}>
          {isAdopted ? "Adopted" : isPet ? "Adopt Now" : "Book Now"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
  },
  detailCard: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.1,
    marginBottom: 10,
  },
  contactCard: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.1,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F46E5",
  },
  button: {
    backgroundColor: "#4F46E5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  disabledButton: {
    backgroundColor: "gray",
  },
});

export default ItemDetailCard;
