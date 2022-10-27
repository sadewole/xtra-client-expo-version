import { View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

function TrackProgress() {
  return (
    <View className="my-2">
      <Slider
        style={{ marginTop: 25 }}
        value={50}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor="#16a34a"
        minimumTrackTintColor="#16a34a"
        maximumTrackTintColor="#e5e7eb"
        onSlidingComplete={() => {}}
      />
      <View className="flex-row justify-between">
        <Text className="text-gray-300 font-poppins">00:00</Text>
        <Text className="text-gray-300 font-poppins">00:00</Text>
      </View>
    </View>
  );
}

export default TrackProgress;
