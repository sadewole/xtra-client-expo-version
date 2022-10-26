import { View, Image, Text, Pressable } from 'react-native';
import React from 'react';
import { useTypedSelector } from '@store/index';
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';

function Player() {
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
        <View className="flex-1 justify-center">
          <View className="border border-gray-500 p-2 w-64 rounded-full mx-auto">
            <View className="w-60 h-60 rounded-full mx-auto justify-center">
              {currentSong?.images?.coverart ? (
                <Image
                  source={{ uri: currentSong?.images?.coverart }}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <Text className="text-white font-poppinsSemiBold text-xl text-center">
                  {currentSong?.title}
                </Text>
              )}
            </View>
          </View>
        </View>
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
          <View className="my-2">
            <Slider
              style={{ marginTop: 25 }}
              value={50}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor="#16a34a"
              minimumTrackTintColor="#16a34a"
              maximumTrackTintColor="#e5e7eb"
              onSlidingComplete={() => {}}
            />
            <View className="flex-row justify-between">
              <Text className="text-gray-300 font-poppins">00:00</Text>
              <Text className="text-gray-300 font-poppins">00:00</Text>
            </View>
          </View>
          {/* Controls */}
          <View className="flex-row justify-between my-6 items-center">
            <Ionicons name="shuffle-outline" size={30} color="white" />
            <FontAwesome5 name="step-backward" size={24} color="white" />
            <View className="p-3 rounded-full bg-green-700 w-14 h-14 justify-center items-center">
              <FontAwesome5 name="play" size={24} color="black" />
              {/* <Ionicons name="pause" size={30} color="black" /> */}
            </View>
            <FontAwesome5 name="step-forward" size={24} color="white" />
            <Ionicons name="repeat" size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Player;
