import { Image, Text, TouchableOpacity } from 'react-native';

export default function FavoriteArtist({ data }: { data: any }) {
  return (
    <TouchableOpacity className="mr-4 items-center">
      <Image source={data.image} className="w-24 h-24 rounded-full mb-2" />
      <Text className="text-white font-poppins">{data.name}</Text>
    </TouchableOpacity>
  );
}
