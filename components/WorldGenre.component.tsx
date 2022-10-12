import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { genres } from '../constant/genres';
import SectionalArea from './SectionalArea.component';

function Genre({ id, value }: { id: string; value: string }) {
  console.log(id);
  return (
    <View>
      <Text>{value}</Text>
    </View>
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
