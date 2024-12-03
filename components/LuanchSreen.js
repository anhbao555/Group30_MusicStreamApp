import { Text, SafeAreaView, StyleSheet,ImageBackground,View,TextInput,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {createContext,useState} from 'react';
// or any files within the Snack
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function LuanchSreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../LuanchSreen/Image30.png")} style={{width:'100%'}}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop :10,marginLeft :20,marginRight :20}}>
        <Text style={{color:'white',fontSize:20}}>9:41</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:80}}>
          <MaterialCommunityIcons name="signal" size={20} color="#FFFFFF" />  
      <Icon name="wifi" size={20} color="#FFFFFF" />                   
      <Ionicons name="battery-full-outline" size={20} color="#FFFFFF" /> 
        </View>
      </View>
       <View style={{marginTop : 70,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Image source={require("../LuanchSreen/Image33.png")} style={{height : 90,width : 90}}/>
        </View>
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop : 200}}>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>Your music</Text>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>Your</Text>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>artists</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop : 40}}>
          <TouchableOpacity style={{height:50,width:'90%',backgroundColor:'rgb(23,26,31)',borderRadius:50,padding:7}}>
            <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'500'}}>Create an account</Text>
          </TouchableOpacity>
          
         </View>
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop : 20}}>
          <TouchableOpacity style={{height:50,width:'90%',backgroundColor:'rgb(235,253,255)',borderRadius:50,padding:7}}
           onPress = {()=> {console.log("Button pressed");navigation.navigate("HomeAudio")}}>
            <Text style={{textAlign:'center',color:'rgb(91,189,199)',fontSize:20,fontWeight:'500'}}>I already have an account</Text>
          </TouchableOpacity>
          
         </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
