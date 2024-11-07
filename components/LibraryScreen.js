import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';


export default function LibraryScreen() {
  const songs = [
    { title: 'FLOWER', artist: 'Jessica Gonzalez', time: '3:36' },
    { title: 'Shape of You', artist: 'Anthony Taylor', time: '3:35' },
    { title: 'Blinding Lights', artist: 'Ashley Scott', time: '4 songs' },
    { title: 'Levitating', artist: 'Anthony Taylor', time: '7:48' },
    { title: 'Astronaut in the Ocean', artist: 'Pedro Moreno', time: '3:36' },
    { title: 'Dynamite', artist: 'Elena Jimenez', time: '6:22' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Library</Text>
      <ScrollView horizontal style={styles.tags}>
        <Text style={styles.tag}>Playlists</Text>
        <Text style={styles.tag}>New tag</Text>
        <Text style={styles.tag}>Songs</Text>
        <Text style={styles.tag}>Albums</Text>
        <Text style={styles.tag}>Artists</Text>
      </ScrollView>
      <ScrollView>
        {songs.map((song, index) => (
          <View style={styles.songItem} key={index}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.thumbnail} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
            <Text style={styles.songTime}>{song.time}</Text>
            <TouchableOpacity>
              <Text style={styles.heart}>💙</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#EEE',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#666',
  },
  songTime: {
    color: '#666',
  },
  heart: {
    fontSize: 20,
    color: '#00F',
  },
});
