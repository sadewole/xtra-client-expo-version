import { View, SafeAreaView, StatusBar, Text } from 'react-native';
import React from 'react';
import FocusedStatusBar from '@components/FocusedStatusBar.component';
// import logo from '@assets/xtra-logo.png';

function Home() {
  return (
    <SafeAreaView
      className="bg-slate-900 flex-1"
      style={{
        paddingTop: StatusBar.currentHeight + 20,
      }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="py-2 mx-4">
        {/* <Image source={logo} className="h-7 w-[100px]  p-4 rounded-full" /> */}
        <Text className="text-white font-poppinsMedium text-2xl mb-1">
          Hello Samuel!
        </Text>
        <Text className="font-poppinsLight text-gray-300">
          Let&lsquo;s listen to everything cool today
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;
