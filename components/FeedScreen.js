import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "1",
    user: "Jessica Gonzalez",
    avatar: require("../assets/Feed - Audio Listing/Avatar 4.png"),
    track: "Flower",
    image: require("../assets/Feed - Audio Listing/Image 93.png"),
    date: "3d",
    plays: 125,
    duration: "05:15",
    likes: 20,
    comments: 3,
    shares: 1,
  },
  {
    id: "2",
    user: "William King",
    avatar: require("../assets/Feed - Audio Listing/Avatar 5.png"),
    track: "Me",
    image: require("../assets/Feed - Audio Listing/Image 94.png"),
    date: "5d",
    plays: 245,
    duration: "05:15",
    likes: 45,
    comments: 9,
    shares: 2,
  },
];

const FeedScreen = ({ navigation }) => {
  const renderPost = ({ item }) => ( 
    <View style={styles.postContainer}>
      {/* Thông tin người dùng */}
      <View style={styles.userInfo}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.postDate}>Posted a track • {item.date}</Text>
        </View>
      </View>

      {/* Ảnh bài đăng */}
      <Image source={item.image} style={styles.postImage} />

      {/* Thông tin bài đăng */}
      <View style={styles.postInfo}>
        <Text style={styles.trackName}>{item.track}</Text>
        <Text style={styles.trackArtist}>{item.user}</Text>
        <View style={styles.stats}>
          <Text>▶ {item.plays}</Text>
          <Text>• {item.duration}</Text>
        </View>
      </View>

      {/* Hành động */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action}>
          <Icon name="heart-outline" size={20} color="#555" />
          <Text>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.action}
          onPress={() =>
            navigation.navigate("Comments", {
              postId: item.id,
              user: item.user,
              track: item.track,
            })
          }
        >
          <Icon name="chatbubble-outline" size={20} color="#555" />
          <Text>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Icon name="share-outline" size={20} color="#555" />
          <Text>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>

      {/* Danh sách bài đăng */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 16,
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postDate: {
    fontSize: 14,
    color: "#888",
  },
  postImage: {
    width: "100%",
    height: 200,
  },
  postInfo: {
    padding: 16,
  },
  trackName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  trackArtist: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  stats: {
    flexDirection: "row",
    fontSize: 14,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default FeedScreen;
