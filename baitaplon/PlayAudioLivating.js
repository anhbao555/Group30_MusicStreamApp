import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView,TextInput,ImageBackground,Image ,ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function PlayAudioLivating({navigation}) {
   const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./PlayAnAudio/Flower-JISOO-8949069.mp3'),  // Đường dẫn tới file nhạc của bạn
      { shouldPlay: false }
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        setIsPlaying(status.isPlaying);
      }
    });
  };

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onSliderChange = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
   return(
      <ScrollView style={styles.container}>
          <ImageBackground source={require("./Home-Audio/Container27.png")} style={{width:"100%",height:"100%", resizeMode: 'cover'}}>
          <View style={styles.overlayHeader}>
            <View style={{flexDirection:'row',justifyContent:"space-between",marginTop :10,marginHorizontal:20}}>
              <Text style={{color:"white",fontSize:20,fontWeight:'400'}}>9:41</Text>
              <View  style={{flexDirection:'row',justifyContent:"space-between",width:90}}>
                <MaterialCommunityIcons name="signal" size={20} color="white" />
               <Icon name="wifi" size={20} color="white" />
               <Ionicons name="battery-full-outline" size={20} color="white" />
              </View>
            </View>
             <View style={{flexDirection:'row',justifyContent:"space-between",marginTop :30,marginHorizontal:20}}>
              <Text style={{color:"white",fontSize:20,fontWeight:'400'}}>Play</Text>
              <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Icon name="keyboard-arrow-down" size={20} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1,backgroundColor :"rgba(0,0,0,0.4)",width:"100%",marginTop : 450}} >
            <View style={{marginHorizontal : 20}}>
                <Text style={{fontSize : 30 , fontWeight :'500' , color:'white'}}>Leviating</Text>
                <Text style={{fontSize : 18,fontWeight:'300',color:'white'}}>Anthony Talor</Text>
                <Image source={require("./PlayAnAudio/Group4(1).png")} style={{height : 120,width:"100%",resizeMode: 'contain',marginTop:20}}/>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontSize :15,color:'white'}}>{`${formatTime(position)}`}</Text>
                  <Text style={{fontSize :15,color:'white'}}>{`${formatTime(duration)}`}</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                  <FontAwesome name="random" size={30} color="white" />
                  <Ionicons name="play-skip-back-sharp" size={30} color="#929697" />
                  <TouchableOpacity onPress={playPause}>
                    <Image source={require("./PlayAnAudio/IconButton3.png")} style={{height:80,width:80}}/>
                  </TouchableOpacity>
                  <Ionicons name="play-skip-forward-outline" size={30} color="white" />
                  <FontAwesome name="ellipsis-h" size={30} color="white" />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
                    <View style={{width : 200,flexDirection:'row'}}>
                      <Ionicons name="heart-outline" size={20} color="white"/>
                      <Text style={{color:'white',fontSize:20,marginLeft :5,marginRight : 25}}>12K</Text>
                      <Icon1 name="comment-text" size={20} color="white"/>
                      <Text style={{color:'white',fontSize:20,marginLeft :5}}>450</Text>
                    </View>
                    <Icon1 name="tray-arrow-up" size={20} color="white"/>
                  </View>
            </View>
          </View>

          </ImageBackground>
      </ScrollView>

   )
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    
  },
  overlayHeader :{
   
    backgroundColor :"rgba(0,0,0,0.4)",
    width:"100%",
    height : 130
  },

})