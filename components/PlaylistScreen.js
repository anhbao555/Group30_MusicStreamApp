import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const playlists = [
  {
    id: '1',
    title: 'Ipsum sit nulla',
    artist: 'Ashley Scott',
    songs: '12 songs',
    image: require('../assets/My Playlists/Image 110.png'), // Đường dẫn tới hình ảnh playlist
  },
  {
    id: '2',
    title: 'Occaecat aliqu',
    artist: 'Jose Garcia',
    songs: '4 songs',
    image: require('../assets/My Playlists/Image 111.png'), // Đường dẫn tới hình ảnh playlist
  },
];

export default function PlaylistScreen({ navigation }) {
  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem}>
      <Image source={item.image} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistDetails}>
          {item.artist} • {item.songs}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="gray" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Playlists</Text>
        <MaterialIcons name="cast" size={24} color="black" />
      </View>

      {/* Title */}
      <Text style={styles.sectionTitle}>Your playlists</Text>

      {/* Playlist List */}
      <FlatList
        data={playlists}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.playlistContainer}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 16,
    color: 'black',
  },
  playlistContainer: {
    paddingHorizontal: 16,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  playlistDetails: {
    color: 'gray',
  },
  addButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

