import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
export default function AudioListing({navigation}) {
  const handlePress = (id) => {
    if (id === "1") {
      navigation.navigate("PlayAnAudio");
    } else if(id==="2") {
      navigation.navigate("PlayAnAudio_Shape");
    }else if(id==="3") {
      navigation.navigate("PlayAudioBlingdingLights");
    }
    else if(id==="4") {
      navigation.navigate("PlayAudioLivating");
    }
    else if(id==="5") {
      navigation.navigate("PlayAudioAstronaunt");
    }
    else if(id==="6") {
      navigation.navigate("PlayAudioDynamit");
    }
    else{
      console.log(`Item ${id} was pressed.`);
    }
  };
  const renderItem=({item}) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={style.container1}>
        <View style={style.itemContainer}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={item.image} style={style.imgSing}/>
            <View style={style.textContainer}>
              <Text style={style.itemtitle}>{item.title}</Text>
              <Text style={style.itemname}>{item.name}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon1 name="play-outline" size={25} color="#919498" />
                  <Text style={style.itemname}>{item.view}</Text>
                  <Icon name="circle" size={15} color="#919498" style={{marginLeft :5}}/>
                  <Text style={style.itemname}>{item.time}</Text>
              </View>
            </View>
          </View>
          <Icon name="keyboard-control" size={40} color="#78797c" />
        </View>
      </View>
      </TouchableOpacity>
  );
  return(
    <ScrollView style={style.container } showsVerticalScrollIndicator={false} >
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
        <Text style={{ color: 'black', fontSize: 20,fontWeight : '500' }}>9:41</Text>
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
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon name="arrow-back-ios" size={40} color="#a5a4aa"/>
          </TouchableOpacity>
          <Icon name="connected-tv" size={40} color="#a5a4aa"/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop : 20}}>
        <Image source={require("./Home-Audio/Container31.png")} style={{height : 200,width:200,marginRight:10}}/>
        <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{fontSize:30,fontWeight:'700'}}>Top 50 - Canada</Text>
          <View style={{flexDirection: 'row', alignItems: 'center',marginVertical: 4}}>
            <Icon name="favorite-border" size={16} color="#1db954" />
          <Text style={{fontSize: 20,color: '#666',marginLeft: 4}}>1,234</Text>
          <Icon name="circle" size={15} color="#ccc" style={{ marginHorizontal: 5 }} />
          <Text style={{fontSize: 20,color: '#666',marginLeft: 4,}}>05:10:18</Text>
          </View>
          <Text  style={{fontSize: 20,color: '#666'}}>Daily chart-toppers update</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width : 80,flexDirection:'row',justifyContent:'space-between'}}>
          <Icon name="favorite-border" size={30} style={{marginTop:10}} color="#96989c"/>
          <Icon name="keyboard-control" size={30} style={{marginTop:10}} color="#96989c"/>
        </View>
        <View style={{width : 80,flexDirection:'row',justifyContent:'space-between'}}>
          <Icon name="shuffle" size={30} style={{marginTop:10}} color="#96989c"/>
          <Icon name="play-circle" size={60}/>
        </View>
      </View>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
      />


      <TouchableOpacity onPress={()=>{navigation.navigate("PlayAnAudio")}}>
        <View style={style.container1}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:20,elevation:2,backgroundColor:'black'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require("./AudioListing-Search/Image83.png")} style={style.imgSing}/>
            <View style={style.textContainer}>
              <Text style={{ fontSize : 25,fontWeight :'500',color:'white'}}>FLOWER</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize :20,color:"white",marginLeft:5}}>Me</Text>
                  <Icon name="circle" size={15} color="white" style={{marginLeft :5}}/>
                  <Text style={{fontSize :20,color:"white",marginLeft:5}}>Jessica Gonzalez</Text>
              </View>
            </View>
          </View>
         <View style={{flexDirection:'row',justifyContent:"space-between",width:80,alignItems:'center'}}>
          <Icon1 name="heart-outline" size={30} color="white"/>
          <Icon1 name="play-outline" size={40} color="white"/>
         </View>
        </View>
      </View>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,width:'100%',borderColor:'#b3b4ba',marginBottom:20}}>
        <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="home"
          size={40}
          color="#7dc1c0"/>
          <Text style={{color:'#7dc1c0',fontSize:15,fontWeight:'500',textAlign:'center'}} >Home</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="search"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:'500',textAlign:'center'}} >Search</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="feed"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:'500',textAlign:'center'}} >Feed</Text>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginTop :20}}>
          <Icon name="library-music"
          size={40}
          color="#66676a"/>
          <Text style={{color:"#a3a4a8",fontSize:15,fontWeight:'500',textAlign:'center'}} >Library</Text>
         </View>
        </View>
  </ScrollView>
  )
}
const style = StyleSheet.create({
  container :{
    flex :1,
    marginLeft : 20,
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
    fontWeight :'500'
  },
  itemname :{
    fontSize :20,
    color:"#919498",
    marginLeft:5
  }
})