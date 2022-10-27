import { View } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

function Control() {
  return (
    <View className="flex-row justify-between my-6 items-center">
      <Ionicons name="shuffle-outline" size={30} color="white" />
      <FontAwesome5 name="step-backward" size={24} color="white" />
      <View className="p-3 rounded-full bg-green-700 w-14 h-14 justify-center items-center">
        <FontAwesome5 name="play" size={24} color="black" />
        {/* <Ionicons name="pause" size={30} color="black" /> */}
      </View>
      <FontAwesome5 name="step-forward" size={24} color="white" />
      <Ionicons name="repeat" size={30} color="white" />
    </View>
  );
}

export default Control;
