import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';

interface MusicData {
  key: string;
  title: string;
  subtitle: string;
  images: Record<'coverart', string>;
}

function SongCard({ data }: { data: MusicData }) {
  return (
    <View className="w-[200px] px-4">
      <Image
        source={{ uri: data.images?.coverart }}
        resizeMode="cover"
        className="w-full h-48 mb-2 rounded-md"
      />
      <Text className="text-white font-poppins">{data.title}</Text>
      <Text className="text-gray-500 font-poppins">{data.subtitle}</Text>
    </View>
  );
}

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
      renderItem={({ item }) => <SongCard data={item} />}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default ChartList;
