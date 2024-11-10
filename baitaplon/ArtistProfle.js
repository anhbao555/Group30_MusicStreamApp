import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// or any files within the Snack
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AssetExample from './components/AssetExample';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
const Data =[{
  id : "1",
  image : require("./AudioListing-Search/Image51.png"),
  title : 'FLOWER',
  name :'Jessica Gonzalez',
  view : "2,1M",
  time:"3:36"
},{
  id : "2",
  image : require("./AudioListing-Search/Image84.png"),
  title : 'Shape of You',
  name :'Anthony Taylor',
  view : "68M",
  time:"03:35"
},
{
  id : "3",
  image : require("./AudioListing-Search/Image86.png"),
  title : 'Blinding Lights',
  name :'Brian Bailey',
  view : "93M",
  time:"04:39"
},
{
  id : "4",
  image : require("./AudioListing-Search/Image87.png"),
  title : 'Leviating',
  name :'Anthony Taylor',
  view : "9M",
  time:"07:68"
},
{
  id : "5",
  image : require("./AudioListing-Search/Image55.png"),
  title : 'Astronaunt in the Ocean',
  name :'Pedro Moreno',
  view : "23M",
  time:"3:36"
},
{
  id : "6",
  image : require("./AudioListing-Search/Image89.png"),
  title : 'Dynamite',
  name :'Elena Jimenez',
  view : "10M",
  time:"06:22"
},


]
export default function ArtistProfile({navigation}) {
  const renderItem=({item}) => (
      <View style={styles.container1}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={item.image} style={styles.imgSing}/>
            <View style={styles.textContainer}>
              <Text style={styles.itemtitle}>{item.title}</Text>
              <Text style={styles.itemname}>{item.name}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon1 name="play-outline" size={25} color="#919498" />
                  <Text style={styles.itemname}>{item.view}</Text>
                  <Icon name="circle" size={15} color="#919498" style={{marginLeft :5}}/>
                  <Text style={styles.itemname}>{item.time}</Text>
              </View>
            </View>
          </View>
          <Icon name="keyboard-control" size={40} color="#78797c" />
        </View>
      </View>
  );
  return(
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon name="arrow-back-ios" size={40} color="#a5a4aa"/>
      </TouchableOpacity>
      <View style={{flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
        <Image source={require("./ArtistProfile/Image63.png")}></Image>
        <Text style={{fontSize:35,fontWeight:700}}>Ryon Young</Text>
        <Text style={{fontSize:20,color:"#7a7c80"}}>65.1K Followers</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:140}}>
          <TouchableOpacity style={{height:50,width:80,borderRadius:20,borderWidth:1,color:'#7a7c80',padding:7}}>
            <Text style={{fontSize:20,color:"#7a7c80"}}>Follow</Text>
          </TouchableOpacity>
           <Icon name="keyboard-control" size={30} style={{marginTop:10}} color='#7a7c80'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:140}}>
          <FontAwesome name="random" size={30} color="white" color='#7a7c80'/>
          <Image source={require("./ArtistProfile/IconButton4.png")}/>
        </View>
      </View>
      <Text style={{fontSize:30,fontWeight:600}}>Popular</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
      />
      <Text style={{fontSize:35,fontWeight:600}}>Albums</Text>
      <View style={{flexDirection:'row',justifyContent :'space-between'}}>
        <View style={{flexDirection:'column'}}>
          <Image source={require('./ArtistProfile/Image71.png')} style={{width :140}}/>
          <Text style={{fontSize:20}}>ME</Text>
          <Text style={{fontSize:15,color:'#7a7c80'}}>Jessica Gonzalez</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          <Image source={require('./ArtistProfile/Image72.png')} style={{width :140}}/>
          <Text style={{fontSize:20}}>Magna nost </Text>
          <Text style={{fontSize:15,color:'#7a7c80'}}>Jessica Gonzalez</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          <Image source={require('./ArtistProfile/Image73.png')} style={{width :140}}/>
          <Text style={{fontSize:20}}>Proident</Text>
          <Text style={{fontSize:15,color:'#7a7c80'}}>Jessica Gonzalez</Text>
        </View>
      </View>
      <Text style={{fontSize : 20}}>About</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,width:'100%',borderColor:'#b3b4ba',marginBottom:20}}>
        <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="home"
          size={40}
          color="#7dc1c0"/>
          <Text style={{color:'#7dc1c0',fontSize:15,fontWeight:500,textAlign:'center'}} >Home</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="search"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:500,textAlign:'center'}} >Search</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="feed"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:500,textAlign:'center'}} >Feed</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="library-music"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:500,textAlign:'center'}} >Library</Text>
         </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container :{
    flex :1,
    marginLeft:20,
    marginRight:20
  },
  itemContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 10,
    elevation : 2,
    justifyContent:'space-between',
  },
  container1 :{
   
  },
  imgSing :{
    height:100,
    width:100,
    marginRight:10,
    borderRadius :5
  },
  textContainer :{
    flex:1
  },
  itemtitle :{
    fontSize : 25,
    fontWeight :500
  },
  itemname :{
    fontSize :20,
    color:"#919498",
    marginLeft:5
  },
  container1 :{
  },
  textContainer :{
    flex:1
  },
})