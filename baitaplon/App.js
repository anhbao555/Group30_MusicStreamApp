import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import LuanchSreen from "./LuanchSreen";
import HomeAudio from './HomeAudio';
import AudioListing from './AudioListing';
import PlayAnAudio from "./PlayAnAudio";
import ArtistProfile from "./ArtistProfle"
const Stack= createNativeStackNavigator();
const App=() => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="LuanchSreen">
     <Stack.Screen name="LuanchSreen" component={LuanchSreen} options={{headerShown : false}}/>
     <Stack.Screen name="HomeAudio" component={HomeAudio} options={{headerShown : false}}/>
     <Stack.Screen name ="AudioListing" component={AudioListing} options={{headerShown : false}}/>
     <Stack.Screen name="PlayAnAudio" component={PlayAnAudio} options={{headerShown : false}}/>
     <Stack.Screen name="ArtistProfile" component={ArtistProfile} options={{headerShown :false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


export default App;