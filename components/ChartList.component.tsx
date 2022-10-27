import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SongCard } from './SongCard.component';
import { MusicData } from './types';

interface ChartListProps {
  loading: boolean;
  data: MusicData[];
}
function ChartList({ loading, data }: ChartListProps) {
  if (loading)
    return (
      <View>
        <Text className="text-white">Loading... {`${loading}`}</Text>
      </View>
    );

  return (
    <FlatList
      horizontal
      data={data.slice(0, 10)}
      renderItem={({ item, index }) => (
        <SongCard song={item} data={data} index={index} />
      )}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default ChartList;
