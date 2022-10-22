import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { genres } from '../constant/genres';

function Genre({ id, value, img }: { id: string; value: string; img: any }) {
  const handlePress = () => {
    console.log(id);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-24 h-24 justify-center items-center mr-4 relative p-2 rounded-md">
      <View className="w-full h-full bg-black/30 absolute" />
      <Image source={img} className="absolute w-full h-full -z-10" />
      <Text className="font-poppinsLight text-white text-sm">{value}</Text>
    </TouchableOpacity>
  );
}

function WorldGenre() {
  return (
    <View className="mb-8 mt-2">
      <FlatList
        horizontal
        data={genres.slice(0, 5)}
        renderItem={({ item }) => <Genre {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        className="px-4"
        ListFooterComponent={<View style={{ width: 15 }} />}
      />
    </View>
  );
}

export default WorldGenre;
