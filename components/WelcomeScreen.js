import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/Launch Screen - Premium/Image 112.png')} // Đường dẫn tới hình nền của bạn
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require('../assets/Launch Screen - Premium/Image 113.png')} style={styles.logo} />

        {/* Tiêu đề chào mừng */}
        <View style={styles.titleView}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.premiumText}>Premium</Text>
            <Text style={styles.ellipsis}>...</Text>
        </View>

        {/* Nút Start Listening */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Playlist")}>
          <Text style={styles.buttonText}>Start listening</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    paddingBottom: 50,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 200,
  },
    titleView: {
        marginTop: 300,
    },

  welcomeText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  premiumText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ellipsis: {
    color: '#FFF',
    fontSize: 60,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 150,
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
