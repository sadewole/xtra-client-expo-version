import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';

type Props = {
  currentSong: {
    title: string;
    images?: { coverart?: string };
  };
};

const { width } = Dimensions.get('window');

function CoverArt({ currentSong }: Props) {
  return (
    <View
      style={{
        width,
        justifyContent: 'center',
      }}>
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
  );
}

export default CoverArt;
