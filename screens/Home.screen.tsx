import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FocusedStatusBar from '@components/FocusedStatusBar.component';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { favoriteArtist } from '../constant/dummy';
// import logo from '@assets/xtra-logo.png';

function FavoriteArtist({ data }: { data: any }) {
  return (
    <TouchableOpacity className="mr-4 items-center">
      <Image source={data.image} className="w-24 h-24 rounded-full mb-2" />
      <Text className="text-white font-poppins">{data.name}</Text>
    </TouchableOpacity>
  );
}

function Home() {
  return (
    <SafeAreaView
      className="bg-black flex-1"
      style={{
        paddingTop: StatusBar.currentHeight + 20,
      }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View className="py-2 mx-4">
          {/* <Image source={logo} className="h-7 w-[100px]  p-4 rounded-full" /> */}
          <Text className="text-white font-poppinsMedium text-2xl mb-1">
            Hello Samuel!
          </Text>
          <Text className="font-poppinsLight text-gray-300">
            Let&lsquo;s listen to everything cool today
          </Text>
        </View>

        <View className="mt-4">
          <View className="mx-4 mb-2 flex-row items-center justify-between">
            <Text className="text-white font-poppinsMedium text-xl">
              Your favourite artist
            </Text>
            <ChevronRightIcon color="white" className="font-semibold" />
          </View>
          <FlatList
            horizontal
            data={favoriteArtist}
            renderItem={({ item }) => <FavoriteArtist data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            className="pt-3 px-4"
            ListFooterComponent={<View style={{ width: 15 }} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
