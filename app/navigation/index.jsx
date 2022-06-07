import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import HomeIcon from '../assets/icons/home.svg';
import JourneysIcon from '../assets/icons/journeys.svg';
import StatsIcon from '../assets/icons/stats.svg';
import SettingsIcon from '../assets/icons/settings.svg';

import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Journeys from '../screens/Journeys';
import Stats from '../screens/Stats';
import Settings from '../screens/Settings';
import Episodes from '../screens/Episodes';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

function JourneysNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Journeys"
        component={Journeys}
        options={{ headerShown: true, title: 'Your Journeys' }}
      />
      <Stack.Screen name="Episodes" component={Episodes} options={{ headerShown: true, title: 'Episodes' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="JourneysTab"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <BottomTab.Screen
        name="JourneysTab"
        component={JourneysNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Journeys',
          tabBarIcon: () => <JourneysIcon />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        options={{
          title: 'Stats',
          tabBarIcon: () => <StatsIcon />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: () => <SettingsIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
}
