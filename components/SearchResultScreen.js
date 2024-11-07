// SearchResultScreen.js
import React, {useState} from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  { id: '1', name: 'Me' },
  { id: '2', name: 'me illum id aliquip' },
  { id: '3', name: 'me lorem' },
  { id: '4', name: 'Me Gonzalez' },
  { id: '5', name: 'Me irure esse' },
  { id: '6', name: 'Me Exercitation' },
  { id: '7', name: 'Me Sint aliquip duis deseru' },
];


const SearchResultScreen = () => {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

    const handleSearchSubmit = () => {
      // Quay lại SearchScreen và truyền text tìm kiếm
      navigation.navigate('Search', { searchText });
    };
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Search"
            style={styles.searchInput}
            onSubmitEditing={handleSearchSubmit}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')} style={styles.iconContainer}>
              <Icon name="close" size={20} color="#888" />
            </TouchableOpacity>)}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Đảm bảo container chiếm toàn bộ chiều ngang màn hình
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative', // Để có thể đặt nút "Close" trong vị trí tuyệt đối
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00BFFF',
    paddingHorizontal: 15,
    marginTop: 20,
    width: '100%', // Đặt chiều rộng của input bằng chiều rộng màn hình
  },
  iconContainer: {
    position: 'absolute',
    right: 15, // Đặt nút "Close" vào góc phải
    zIndex: 1,  // Đảm bảo nút close không bị che khuất
    paddingTop: 15,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchResultScreen;
