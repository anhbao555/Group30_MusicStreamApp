import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Icon package

import SubscriptionScreen from './components/SubscriptionScreen';
import LibraryScreen from './components/LibraryScreen';
import WelcomeScreen from './components/WelcomeScreen';
import PlaylistScreen from './components/PlaylistScreen';
import SearchScreen from './components/SearchScreen';
import SearchResultScreen from './components/SearchResultScreen';
import FeedScreen from './components/FeedScreen';
import Comments from './components/CommentsScreen';
import HomeAudio from './components/HomeAudio';
import LuanchSreen from './components/LuanchSreen';
import AudioListing from './components/AudioListing';
import PlayAnAudio from './components/PlayAnAudio';
import ArtistProfile from './components/ArtistProfile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Feed':
              iconName = 'newspaper-outline';
              break;
            case 'Library':
              iconName = 'library';
              break;
            default:
             
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeAudio} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResults" component={SearchResultScreen} options={{headerShown: false}} />
        <Stack.Screen name="Comments" component={Comments} options={{ headerShown: false }} />
        <Stack.Screen name="LuanchSreen" component={LuanchSreen} options={{headerShown : false}}/>
        <Stack.Screen name="HomeAudio" component={HomeAudio} options={{headerShown : false}}/>
        <Stack.Screen name="AudioListing" component={AudioListing} options={{headerShown : false}}/>
        <Stack.Screen name="PlayAnAudio" component={PlayAnAudio} options={{headerShown : false}}/>
        <Stack.Screen name="ArtistProfile" component={ArtistProfile} options={{headerShown :false}}/>
        <Stack.Screen name="PlayList" component={PlaylistScreen} options={{headerShown :false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
