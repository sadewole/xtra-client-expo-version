import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

import FocusedStatusBar from '@components/FocusedStatusBar.component';
import { useGetTopChartsQuery } from '@store/services/api';
import SectionalArea from '@components/SectionalArea.component';
import ChartList from '@components/ChartList.component';
import CityList from '@components/CityList.component';

import RippleAnimation from '@assets/ripple-animation.json';

import globeImg from '@assets/globe.jpg';
import WorldGenre from '@components/WorldGenre.component';
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
        <View className="py-2 mx-4 mb-4">
          {/* <Image source={logo} className="h-7 w-[100px]  p-4 rounded-full" /> */}
          <Text className="text-white font-poppinsMedium text-2xl mb-1">
            Hello Grace!
          </Text>
          <Text className="font-poppinsLight text-gray-300">
            Let&lsquo;s listen to everything cool today
          </Text>
        </View>

        <WorldGenre />
        <View className="mb-8 mx-4">
          <Text className="text-white font-poppinsMedium text-xl mb-5">
            Tap to identify song
          </Text>
          <View className="h-[100px] w-full relative overflow-hidden justify-center">
            <Lottie
              className="w-full h-auto"
              source={RippleAnimation}
              autoPlay
              loop
            />
          </View>
        </View>
        {!error && (
          <SectionalArea title="Top charts">
            <ChartList loading={isLoading} data={data} />
          </SectionalArea>
        )}
        <View className="w-full h-[250px] relative rounded-md overflow-hidden mb-8">
          <Text className="font-poppinsBold text-white text-5xl z-10 mt-12 p-4">
            WORLD{'\n'}CHART
          </Text>
          <Image source={globeImg} className="w-full h-full absolute" />
        </View>
        <View>
          <Text className="text-white font-poppinsMedium text-xl mx-4">
            Trending by cities
          </Text>
          {/** Germany */}
          <CityList id="2950159" city="Berlin" />
          {/** USA */}
          <CityList id="5128581" city="New York City" />
          {/** South Africa */}
          <CityList id="993800" city="Johannesburg" />
          {/** UK */}
          <CityList id="2643743" city="London" />
          {/** Australia */}
          <CityList id="2147714" city="Sydney" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
