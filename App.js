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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
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
              iconName = 'feed';
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
      <Tab.Screen name="Home" component={PlaylistScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Subscription" component={SubscriptionScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResults" component={SearchResultScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
