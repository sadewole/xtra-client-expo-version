import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { genres } from '../constant/genres';
import SectionalArea from './SectionalArea.component';

function Genre({ id, value }: { id: string; value: string }) {
  const handlePress = () => {
    console.log(id);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-24 h-24 justify-center items-center mr-4 bg-red-500 p-2 rounded-md">
      <Text className="font-poppinsLight text-white text-sm">{value}</Text>
    </TouchableOpacity>
  );
}

function WorldGenre() {
  return (
    <SectionalArea title="Your favourite artist">
      <FlatList
        horizontal
        data={genres}
        renderItem={({ item }) => <Genre {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        className="px-4"
        ListFooterComponent={<View style={{ width: 15 }} />}
      />
    </SectionalArea>
  );
}

export default WorldGenre;
