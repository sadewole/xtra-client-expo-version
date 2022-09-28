import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Video } from 'expo-av';
import AnimatedVideo from '@assets/mp4/animated_visualizer.mp4';
import bgImage from '@assets/flower-trumpeter.png';
import FocusedStatusBar from '@components/FocusedStatusBar.component';
import { ArrowRightCircleIcon } from 'react-native-heroicons/outline';

function GetStarted() {
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        marginTop: StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
      }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-1">
        <Image
          source={bgImage}
          className="w-[80px] h-[80px] rounded-r-full rounded-t-full"
        />
        <View className="h-[100px] my-4" />
        <View className="flex-1" />
        <View className="flex-row items-center justify-between pl-6">
          <Text className="text-5xl font-bold mr-4">
            Live{'\n'}Your{'\n'}Day{'\n'}With{'\n'}
            <Text className="text-sky-500">Music.</Text>
          </Text>
          <Video
            source={AnimatedVideo}
            resizeMode="cover"
            isLooping
            shouldPlay
            className="w-[150px] h-[150px] rounded-l-full flex-1"
          />
        </View>
        <View className="items-center my-10 space-y-4">
          <TouchableOpacity className="bg-black p-2 px-4 rounded-full w-[250px] justify-between flex-row items-center">
            <Text className="text-lg font-bold uppercase text-white">
              Sign up for free
            </Text>
            <ArrowRightCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-2 px-4 rounded-full w-[250px] justify-between flex-row items-center">
            <Text className="text-lg font-bold uppercase">Login</Text>
            <ArrowRightCircleIcon color="black" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GetStarted;
