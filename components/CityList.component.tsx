import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useGetCityQuery } from '@store/services/api';
import { SongCard } from './SongCard.component';
import SectionalArea from './SectionalArea.component';

function CityList({ id, city }: { id: string; city: string }) {
  const { data, isLoading, error } = useGetCityQuery(id);

  if (isLoading)
    return (
      <View>
        <Text className="text-white">Loading... {`${isLoading}`}</Text>
      </View>
    );

  if (error) return null;

  return (
    <SectionalArea title={city} smTitle>
      <FlatList
        horizontal
        data={data.slice(0, 10)}
        renderItem={({ item, index }) => (
          <SongCard song={item} data={data} index={index} shrink />
        )}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </SectionalArea>
  );
}

export default CityList;
