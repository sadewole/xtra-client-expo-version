/* eslint-disable camelcase */
import React, { useCallback } from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

// import GetStarted from '@screens/GetStarted.screen';
import Home from '@screens/Home.screen';
import TopBarIcon from '@components/TabBarIcon.component';
import Search from '@screens/Search.screen';
import Profile from '@screens/Profile.screen';
import Library from '@screens/Library.screen';
import { store } from '@store/index';
import Player from '@screens/Player.screen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line no-unused-vars
type OptionProps = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => MaterialBottomTabNavigationOptions;

const options: OptionProps = ({ route }) => ({
  tabBarIcon: (props) => TopBarIcon(route.name, { ...props }),
});

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: '#000000',
        borderTopColor: '#ffffff',
        borderTopWidth: 1,
      }}>
      <Tab.Screen name="Home" component={Home} options={options} />
      <Tab.Screen name="Search" component={Search} options={options} />
      <Tab.Screen name="Library" component={Library} options={options} />
      <Tab.Screen name="Profile" component={Profile} options={options} />
    </Tab.Navigator>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsLight: Poppins_300Light,
    Poppins: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
              <Stack.Screen name="HomeScreen" component={BottomTabStack} />
              <Stack.Screen
                name="PlayModalScreen"
                component={Player}
                options={{ presentation: 'fullScreenModal' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}
