import React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';
// import GetStarted from '@screens/GetStarted.screen';
import Home from '@screens/Home.screen';
import TopBarIcon from '@components/TabBarIcon.component';
import Search from '@screens/Search.screen';
import Profile from '@screens/Profile.screen';
import Library from '@screens/Library.screen';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

// eslint-disable-next-line no-unused-vars
type OptionProps = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => MaterialBottomTabNavigationOptions;

const options: OptionProps = ({ route }) => ({
  tabBarIcon: (props) => TopBarIcon(route.name, { ...props }),
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'white',
});

function BottomTabStack() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#000000',
        borderTopColor: '#ffffff',
      }}>
      <Tab.Screen name="Home" component={Home} options={options} />
      <Tab.Screen name="Search" component={Search} options={options} />
      <Tab.Screen name="Library" component={Library} options={options} />
      <Tab.Screen name="Profile" component={Profile} options={options} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
        <Stack.Screen name="HomeScreen" component={BottomTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
