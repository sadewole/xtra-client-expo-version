import React from 'react';
import _ from 'lodash';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MusicData } from './types';

const truncateText = (text: string) => {
  return _.truncate(text, {
    length: 35,
  });
};

export function SongCard({
  shrink,
  data,
}: {
  shrink?: boolean;
  data: MusicData;
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={`${shrink ? 'w-[180px]' : 'w-[200px]'} px-4`}
      onPress={() => navigation.navigate('PlayModalScreen')}>
      <Image
        source={{ uri: data.images?.coverart }}
        resizeMode="cover"
        className={`w-full ${shrink ? 'h-40' : 'h-48'} mb-2 rounded-md`}
      />
      <Text className="text-white font-poppins">
        {truncateText(data.title)}
      </Text>
      <Text className="text-gray-500 font-poppins truncate">
        {truncateText(data.subtitle)}
      </Text>
    </TouchableOpacity>
  );
}
