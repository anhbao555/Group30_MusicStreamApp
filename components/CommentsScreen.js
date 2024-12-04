import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const initialCommentsData = {
  1: [
    // Bình luận cho bài hát có `postId` là "1"
    {
      id: "1",
      user: "Sally Rooney",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 8.png"),
      comment: "Do duis cul 😍",
      likes: 1,
      time: "17h",
    },
    {
      id: "2",
      user: "Jason",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 9.png"),
      comment: "Minim magna exc 😍",
      likes: 1,
      time: "48m",
    },
    {
      id: "3",
      user: "Michael Key",
      avatar: require("../assets/../assets/Feed - Comment on an Audio/Avatar 11.png"),
      comment: "Deserunt officia consectetur adipi",
      likes: 2,
      time: "40m",
    },
  ],
  2: [
    // Bình luận cho bài hát có `postId` là "2"
    {
      id: "1",
      user: "Jason",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 9.png"),
      comment: "Minim magna exc 😍",
      likes: 1,
      time: "48m",
    },
    {
      id: "2",
      user: "Sally Rooney",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 8.png"),
      comment: "Do duis culpa 😍",
      likes: 3,
      time: "17h",
    },
    {
      id: "3",
      user: "Michael Key",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 11.png"),
      comment: "Deserunt officia consectetur adipi.",
      likes: 2,
      time: "40m",
    },
    {
      id: "4",
      user: "Emily Carter",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 9.png"),
      comment: "Exercitation ullamco laboris nisi.",
      likes: 0,
      time: "1d",
    },
    {
      id: "5",
      user: "John Doe",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 8.png"),
      comment: "Voluptate velit esse cillum dolore.",
      likes: 5,
      time: "3h",
    },
    {
      id: "6",
      user: "Alice Morgan",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 11.png"),
      comment: "Eu fugiat nulla pariatur.",
      likes: 1,
      time: "2d",
    },
    {
      id: "7",
      user: "Robert Smith",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 9.png"),
      comment: "Cupidatat non proident sunt in culpa.",
      likes: 0,
      time: "5m",
    },
    {
      id: "8",
      user: "Sophia Brown",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 11.png"),
      comment: "Mollit anim id est laborum.",
      likes: 4,
      time: "6h",
    },
    {
      id: "9",
      user: "Chris Evans",
      avatar: require("../assets/Feed - Comment on an Audio/Avatar 8.png"),
      comment: "Laboris nisi ut aliquip ex ea commodo.",
      likes: 2,
      time: "12h",
    },
  ],
};

const CommentsScreen = ({ route }) => {
  const { postId, track } = route.params;

  // Dữ liệu bình luận mẫu
  const [commentsData, setComments] = useState(initialCommentsData);
  const comments = commentsData[postId] || []; // Lấy bình luận tương ứng với `postId`

  // Thêm bình luận mới
  const [newComment, setNewComment] = useState("");
  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedComments = [
        {
          id: `${comments.length + 1}`,
          user: "You",
          avatar: require("../assets/Feed - Comment on an Audio/Avatar 13.png"),
          comment: newComment,
          likes: 0,
          time: "Just now",
        },
        ...comments,
      ];
  
      setComments((prevData) => ({
        ...prevData,
        [postId]: updatedComments, // Cập nhật bình luận cho bài hát hiện tại
      }));
  
      setNewComment("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.header}>Bình luận cho {track}</Text>

      {/* Danh sách bình luận */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.commentContent}>
              <Text style={styles.commentUser}>{item.user}</Text>
              <Text style={styles.commentText}>{item.comment}</Text>
              <View style={styles.commentActions}>
                <Text style={styles.commentTime}>{item.time}</Text>
                <TouchableOpacity style={styles.commentLike}>
                  <Icon name="thumbs-up-outline" size={16} color="#555" />
                  <Text style={styles.commentLikeCount}>{item.likes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity>
            <Text style={styles.viewMore}>Xem thêm bình luận...</Text>
          </TouchableOpacity>
        }
      />

      {/* Phần nhập liệu */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Viết bình luận..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.sendButton}>
          <Icon name="send-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  commentContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentUser: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentText: {
    marginBottom: 4,
    color: "#333",
  },
  commentActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  commentTime: {
    color: "#888",
    fontSize: 12,
  },
  commentLike: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  commentLikeCount: {
    fontSize: 12,
    color: "#555",
  },
  viewMore: {
    textAlign: "center",
    color: "#007BFF",
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 8,
  },
});

export default CommentsScreen;
