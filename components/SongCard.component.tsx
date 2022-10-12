import React from 'react';
import { Image, Text, View } from 'react-native';
import { MusicData } from './types';

export function SongCard({
  shrink,
  data,
}: {
  shrink?: boolean;
  data: MusicData;
}) {
  return (
    <View className={`${shrink ? 'w-[180px]' : 'w-[200px]'} px-4`}>
      <Image
        source={{ uri: data.images?.coverart }}
        resizeMode="cover"
        className={`w-full ${shrink ? 'h-40' : 'h-48'} mb-2 rounded-md`}
      />
      <Text className="text-white font-poppins">{data.title}</Text>
      <Text className="text-gray-500 font-poppins">{data.subtitle}</Text>
    </View>
  );
}
