import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const LibraryScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: "1",
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      plays: "2.1M",
      duration: "3:36",
      image: require("../assets/My Library/Image 101.png"),
    },
    {
      id: "2",
      title: "Shape of You",
      artist: "Anthony Taylor",
      plays: "68M",
      duration: "3:35",
      image: require("../assets/My Library/Image 102.png"),
    },
    {
      id: "3",
      title: "Blinding Lights",
      artist: "Ashley Scott",
      plays: "4 songs",
      image: require("../assets/My Library/Image 103.png"),
      isPlaylist: true,
    },
    {
      id: "4",
      title: "Levitating",
      artist: "Anthony Taylor",
      plays: "9M",
      duration: "7:48",
      image: require("../assets/My Library/Image 104.png"),
    },
    {
      id: "5",
      title: "Astronaut in the Ocean",
      artist: "Pedro Moreno",
      plays: "23M",
      duration: "3:36",
      image: require("../assets/My Library/Image 105.png"),
    },
    {
      id: "6",
      title: "Dynamite",
      artist: "Elena Jimenez",
      plays: "10M",
      duration: "6:22",
      image: require("../assets/My Library/Image 106.png"),
    },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songContainer}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        {item.duration && (
          <Text style={styles.songPlays}>
            {item.plays} • {item.duration}
          </Text>
        )}
      </View>
      <TouchableOpacity>
        {item.isPlaylist ? (
          <Icon name="chevron-forward" size={24} color="#000" />
        ) : (
          <Icon name="heart" size={24} color="#87CEEB" />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Library</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("PlayList")}>
          <Text style={styles.filterButton}>Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>New tag</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Artists</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    fontSize: 14,
    color: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: "#f2f2f2",
  },
  listContainer: {
    paddingBottom: 20,
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: 14,
    color: "#666",
  },
  songPlays: {
    fontSize: 12,
    color: "#666",
  },
});

export default LibraryScreen;
