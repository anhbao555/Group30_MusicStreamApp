import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// or any files within the Snack
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function HomeAudio({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginRight: 20,
        }}>
        <Text style={{ color: 'black', fontSize: 20 }}>9:41</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 70,
          }}>
          <MaterialCommunityIcons name="signal" size={20} color="black" />
          <Icon name="wifi" size={20} color="black" />
          <Ionicons name="battery-full-outline" size={20} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginRight: 20,
        }}>
        <Image
          source={require('../Home-Audio/Image36.png')}
          style={{ height: 40, width: 40 }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
          }}>
          <Icon name="notifications" size={40} color="#b3b4ba" />
          <Image
            source={require('../Home-Audio/Avatar3.png')}
            style={{ height: 40, width: 40 }}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          color: '#b3b4ba',
          marginTop: 20,
        }}>
        Good morning,
      </Text>
      <Text style={{ fontSize: 25, fontWeight: '600' }}>Asheley Scott</Text>
      <View
        style={{
          marginTop: 10,
          marginRight: 20,
          flexDirection: 'row',
          borderRadius: 20,
          height: 40,
          width: '90%',
          backgroundColor: '#f0f0f0',
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <Icon
          name="search"
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={{ fontSize: 20, flex: 1 }}
          placeholder="What you want to listen to"
          placeholderTextColor="#b3b4ba"></TextInput>
      </View>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>
        {' '}
        Suggestions for you
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('../Home-Audio/Container26.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Reflection</Text>
            <Text style={styles.artist}>Christina Aguilera</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('../Home-Audio/Container27.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>In The Starts</Text>
            <Text style={styles.artist}>Benson Boone</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop :20 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Charts</Text>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#b3b4ba' }}>
          See all
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() =>{navigation.navigate("AudioListing")}}>
          <View
            style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Container31.png')}
              style={styles.imgSing}
            />
            <Text style={styles.titleimg}>Daily chart-toppers</Text>
            <Text style={styles.titleimg}>update</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Container32.png')}
              style={styles.imgSing}
            />
           <Text style={styles.titleimg}>Daily chart-toppers</Text>
            <Text style={styles.titleimg}>update</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Container33.png')}
              style={styles.imgSing}
            />
            <Text style={styles.titleimg}>Daily chart-toppers</Text>
            <Text style={styles.titleimg}>update</Text>
          </View>
        </TouchableOpacity>
      </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:50 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Trending albums</Text>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#b3b4ba' }}>
          See all
        </Text>
      </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity>
          <View
            style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Image45.png')}
              style={styles.imgSing}
            />
            <Text style={{fontSize : 20,fontWeight:'400'}}>ME</Text>
            <Text style={styles.titleimg}>Jessica Gonzalez</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Image46.png')}
              style={styles.imgSing}
            />
            <Text style={{fontSize : 20,fontWeight:'400'}}>Magna nost</Text>
            <Text style={styles.titleimg}>Brian Thomas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divSing}>
            <Image
              source={require('../Home-Audio/Image47.png')}
              style={styles.imgSing}
            />
            <Text style={{fontSize : 20,fontWeight:'400'}}>Magna nost</Text>
            <Text style={styles.titleimg}>Chritop</Text>
          </View>
        </TouchableOpacity>
      </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:50 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Popular artists</Text>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#b3b4ba' }}>
          See all
        </Text>
      </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("ArtistProfile")}}>
          <View
            style={styles.divSingTron}>
            <Image
              source={require('../Home-Audio/Image39.png')}
              style={styles.imgSing}
            />
            <Text style={styles.titleimg} >Jennifer Wilson</Text>
            <TouchableOpacity style={{height:40,width:90,backgroundColor:'black',padding:7,borderRadius:20,marginTop:10}}>
                <Text style={{fontSize:20,color:'white',textAlign:'center',fontWeight:'400'}}>Follow</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={styles.divSingTron}>
            <Image
              source={require('../Home-Audio/Image40.png')}
              style={styles.imgSing}
            />
            <Text style={styles.titleimg}>Elizabeth Hall</Text>
            <TouchableOpacity style={{height:40,width:90,backgroundColor:'black',padding:7,borderRadius:20,marginTop:10}}>
                <Text style={{fontSize:20,color:'white',textAlign:'center',fontWeight:'400'}}>Follow</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divSingTron}>
            <Image
              source={require('../Home-Audio/Image41.png')}
              style={styles.imgSing}
            />
            <Text style={styles.titleimg}>Anthor Hallaiaaa</Text>
            <TouchableOpacity style={{height:40,width:90,backgroundColor:'black',padding:7,borderRadius:20,marginTop:10}}>
                <Text style={{fontSize:20,color:'white',textAlign:'center',fontWeight:'400'}}>Follow</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  cardContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Đặt nội dung dưới cùng của ảnh
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ cho văn bản
    padding: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    color: '#ffffff',
    fontSize: 14,
  },
  divSing : {
    flexDirection: 'column',
              height: 190,
              width: 170,
              marginRight: 20,
              marginTop :10
  },
  imgSing :{
    height: 170, width: 170, borderRadius: 5
  },
  titleimg :{
       color: "#b3b4ba",
    fontSize: 20,
    fontWeight :'400'
 
  },
  divSingTron :{
     flexDirection: 'column',
              height: 190,
              width: 170,
              marginRight: 20,
              marginTop :10,
              alignItems:'center'
  }
});
