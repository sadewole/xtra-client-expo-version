import React from 'react';
import _ from 'lodash';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setCurrentSong } from '@store/slices/player';
import { useAppDispatch } from '@store/index';
import { MusicData } from './types';

const truncateText = (text: string) => {
  return _.truncate(text, {
    length: 35,
  });
};

export function SongCard({
  shrink,
  song,
  data,
  index,
}: {
  shrink?: boolean;
  song: MusicData;
  data: MusicData[];
  index: number;
}) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    // dispatch(setCurrentSong(data));
    dispatch(setCurrentSong({ song, data, index }));
    return navigation.navigate('PlayModalScreen');
  };

  return (
    <TouchableOpacity
      className={`${shrink ? 'w-[180px]' : 'w-[200px]'} px-4`}
      onPress={onPress}>
      <Image
        source={{ uri: song.images?.coverart }}
        resizeMode="cover"
        className={`w-full ${shrink ? 'h-40' : 'h-48'} mb-2 rounded-md`}
      />
      <Text className="text-white font-poppins">
        {truncateText(song.title)}
      </Text>
      <Text className="text-gray-500 font-poppins truncate">
        {truncateText(song.subtitle)}
      </Text>
    </TouchableOpacity>
  );
}
