import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import FocusedStatusBar from '@components/FocusedStatusBar.component';
import { useGetTopChartsQuery } from '@store/services/api';
import SectionalArea from '@components/SectionalArea.component';
import FavoriteArtist from '@components/FavoriteArtist.component';

import ChartList from '@components/ChartList.component';
import { favoriteArtist } from '../constant/dummy';
// import logo from '@assets/xtra-logo.png';

function Home() {
  const { data, isLoading, error } = useGetTopChartsQuery({});

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

        <SectionalArea title="Your favourite artist">
          <FlatList
            horizontal
            data={favoriteArtist}
            renderItem={({ item }) => <FavoriteArtist data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            className="px-4"
            ListFooterComponent={<View style={{ width: 15 }} />}
          />
        </SectionalArea>
        {!error && (
          <SectionalArea title="Top charts">
            <ChartList loading={isLoading} data={data} />
          </SectionalArea>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
