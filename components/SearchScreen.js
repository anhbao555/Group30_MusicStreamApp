import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { id: '1', title: 'Mer Watson', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', img : require('../assets/Audio Listing - Search Results/Image 85.png') },
  { id: '2', title: 'Me', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', img : require('../assets/Audio Listing - Search Results/Image 83.png') },
  { id: '3', title: 'Me Inc', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', img : require('../assets/Audio Listing - Search Results/Image 84.png') },
  { id: '4', title: 'Dozz me', artist: 'Brian Bailey', plays: '93M', duration: '4:39', img : require('../assets/Audio Listing - Search Results/Image 86.png') },
  { id: '5', title: 'East me', artist: 'Brian Bailey', plays: '9M', duration: '7:48', img : require('../assets/Audio Listing - Search Results/Image 87.png') },
  { id: '6', title: 'Me Ali', artist: 'Brian Bailey', plays: '23M', duration: '3:36', img : require('../assets/Audio Listing - Search Results/Image 88.png') },
  { id: '7', title: 'Me quis a', artist: 'Brian Bailey', plays: '10M', duration: '06:22', img : require('../assets/Audio Listing - Search Results/Image 89.png') },
  { id: '8', title: 'Me light', artist: 'Brian Bailey', plays: '81M', duration: '05:15', img : require('../assets/Audio Listing - Search Results/Image 90.png') },
];

const Search = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (route.params?.searchText !== undefined) {
      setSearchText(route.params.searchText);
      handleSearch(route.params.searchText); // Gọi hàm tìm kiếm khi nhận được text từ route
    }
  }, [route.params?.searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFilteredData(data); // Nếu không có nội dung tìm kiếm, hiển thị toàn bộ danh sách
    } else {
      const filteredResults = data.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };
  // Hàm xử lý khi chọn tab
  const handleTabPress = (tab) => {
    setActiveTab(tab); // Cập nhật state tab hiện tại
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchResults')}>
          <View style={styles.searchInputContainer}>
          <TextInput
            value={searchText}
            onChangeText={handleSearch}
            placeholder="Search"
            style={styles.searchInput}
            editable={false}
          />
          
          </View>
          </TouchableOpacity>
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')} style={styles.iconContainer}>
              <Icon name="close" size={20} color="#888" />
            </TouchableOpacity>
          )}
        
      </View>
      <View style={styles.headerTabs}>
      <TouchableOpacity onPress={() => handleTabPress('All')}>
          <Text style={[styles.tab, activeTab === 'All' && styles.activeTab]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Tracks')}>
          <Text style={[styles.tab, activeTab === 'Tracks' && styles.activeTab]}>Tracks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Albums')}>
          <Text style={[styles.tab, activeTab === 'Albums' && styles.activeTab]}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Artists')}>
          <Text style={[styles.tab, activeTab === 'Artists' && styles.activeTab]}>Artists</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={ item.img } style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.artist}</Text>
              <Text style={styles.plays}>{item.plays} plays • {item.duration}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.moreIcon}>...</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    paddingHorizontal: 15,
    marginBottom: 40,
    width: '100%',
    paddingRight: 35,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative', // Để có thể đặt nút "Close" trong vị trí tuyệt đối
  },
  headerTabs: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    padding : 10,
  },
  tab: {
    marginRight: 20,
    fontSize: 16,
    color: '#777',
  },
  activeTab: {
    color: '#008FFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    borderBottomColor : "#008FFF",
    borderBottomWidth: 2, // Thêm đường gạch chân
    paddingBottom: 15, // Khoảng cách giữa chữ và đường gạch chân
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#777',
    marginTop: 5,
  },
  plays: {
    color: '#999',
    marginTop: 5,
  },
  moreIcon: {
    fontSize: 24,
    color: '#777',
  },
  iconContainer: {
    position: 'absolute',
    paddingTop: 5,
    right: 10, // Đặt nút "Close" vào góc phải
    zIndex: 1,  // Đảm bảo nút close không bị che khuất
  },
});

export default Search;
