import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground 
} from "react-native";

const packages = [
  {
    id: "1",
    title: "Premium",
    price: "$12.99 / month",
    features: [
      "Ad-free listening",
      "Download to listen offline",
      "Access full catalog Premium",
      "High sound quality",
      "Cancel anytime",
    ],
  },
  {
    id: "2",
    title: "Member",
    price: "$7.99 / month",
    features: [
      "Ad-free listening",
      "Limited downloads",
      "Standard catalog access",
      "Medium sound quality",
    ],
  },
  {
    id: "3",
    title: "VIP",
    price: "$19.99 / month",
    features: [
      "Ad-free listening",
      "Unlimited downloads",
      "Access to exclusive content",
      "Highest sound quality",
      "Cancel anytime",
    ],
  },
];

const screenWidth = Dimensions.get("window").width;

export default function SubscriptionScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  const renderPackage = ({ item }) => (
    <View style={styles.card}>
      
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.titleView}>
        <Text style={styles.subText}>Free for 1 month</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.features}>
        {item.features.map((feature, index) => (
          <Text key={index} style={styles.featureText}>
            ✓ {feature}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>Subscribe now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={require('../assets/Subscription Plans/Image 116.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <Text style={styles.header}>Unlimited{"\n"}music selections</Text>
      <FlatList
        data={packages}
        renderItem={renderPackage}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
      />

      {/* Dấu chấm pagination */}
      <View style={styles.pagination}>
        {packages.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <Text style={styles.backText}>Back home</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    marginTop: 200,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 50,
    width: screenWidth - 50,
    height: 400,
    marginHorizontal: 10,
    marginRight: 40,
    alignItems: "center",
  },
  subText: {
    color: "#8B00FF",
    fontSize: 14,
    marginVertical: 5,
    marginRight: 10,
    padding : 5,
    borderRadius : 10,
    backgroundColor: "#F5F5F5",
  },
  titleView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  features: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  featureText: {
    color: "#333",
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginHorizontal: 4,
  },
  backText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
