import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import { useTypedSelector } from '@store/index';
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Control from '@components/Player/Control.component';
import TrackProgress from '@components/Player/TrackProgress.component';
import CoverArt from '@components/Player/CoverArt.component';
import { useGetTopChartsQuery } from '@store/services/api';

function Player() {
  const { data } = useGetTopChartsQuery({});

  const { currentSong } = useTypedSelector((state) => state.player);
  const navigation = useNavigation();

  const splitColor = currentSong?.images?.joecolor.split(':');
  const backgroundColor = splitColor
    ? `#${splitColor[splitColor.length - 1]}`
    : '#1f2937';

  return (
    <View className="flex-1" style={{ backgroundColor }}>
      <View className="flex-1 pt-12">
        <View className="px-4 py-2 flex-row justify-between items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronDownIcon color="white" />
          </Pressable>
          <Pressable>
            <EllipsisVerticalIcon color="white" />
          </Pressable>
        </View>
        <FlatList
          renderItem={({ item }) => <CoverArt currentSong={item} />}
          data={data}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={() => {}}
        />

        <View className="px-4 py-6 bg-black/50 rounded-t-2xl">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-white font-poppinsSemiBold text-xl">
                {currentSong?.title}
              </Text>
              <Text className="text-gray-300 font-poppinsMedium truncate">
                {currentSong?.subtitle}
              </Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="white" />
            {/* <FontAwesome name="heart" size={24} color="#16a34a" /> */}
          </View>
          {/* Track progress */}
          <TrackProgress />
          {/* Controls */}
          <Control />
        </View>
      </View>
    </View>
  );
}

export default Player;
