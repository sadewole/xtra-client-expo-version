import { View, ImageBackground, Text, Pressable } from 'react-native';
import React from 'react';
import { useTypedSelector } from '@store/index';
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
// import FocusedStatusBar from '@components/FocusedStatusBar.component';

function Player() {
  const { currentSong } = useTypedSelector((state) => state.player);
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        source={{ uri: currentSong?.images?.background }}
        resizeMode="cover"
        className="flex-1 pt-12">
        <View className="px-4 py-2 flex-row justify-between items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronDownIcon color="white" />
          </Pressable>
          <Pressable>
            <EllipsisVerticalIcon color="white" />
          </Pressable>
        </View>
        <View className="flex-1" />
        <View className="p-4 bg-black/40">
          <Text className="text-white font-poppinsSemiBold text-xl">
            {currentSong?.title}
          </Text>
          <Text className="text-gray-500 font-poppinsMedium truncate">
            {currentSong?.subtitle}
          </Text>
          <View>
            <View className="" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Player;
