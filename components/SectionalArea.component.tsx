import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
// import { ChevronRightIcon } from 'react-native-heroicons/outline';

interface Props {
  title: string;
  children: ReactNode;
  smTitle?: boolean;
}

function SectionalArea({ title, children, smTitle }: Props) {
  return (
    <View className="mb-8 mt-2">
      <View className="mx-4 mb-5 flex-row items-center justify-between">
        <Text
          className={`text-white ${
            !smTitle ? 'font-poppinsMedium text-xl' : 'font-poppins text-lg'
          }`}>
          {title}
        </Text>
        <Text className="text-white pl-2.5 pr-2 rounded-full border border-gray-700">
          more
        </Text>
        {/* <ChevronRightIcon color="white" className="font-semibold" /> */}
      </View>
      {children}
    </View>
  );
}

export default SectionalArea;
