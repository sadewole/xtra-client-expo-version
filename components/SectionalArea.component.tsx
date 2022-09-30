import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/outline';

interface Props {
  title: string;
  children: ReactNode;
}

function SectionalArea({ title, children }: Props) {
  return (
    <View className="mt-8">
      <View className="mx-4 mb-5 flex-row items-center justify-between">
        <Text className="text-white font-poppinsMedium text-xl">{title}</Text>
        <ChevronRightIcon color="white" className="font-semibold" />
      </View>
      {children}
    </View>
  );
}

export default SectionalArea;
