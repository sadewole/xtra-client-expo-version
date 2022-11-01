import { View, Text, Pressable, Animated, Dimensions } from 'react-native';
// import TrackPlayer from 'react-native-track-player'; // useTrackPlayerEvents, // useProgress, // usePlaybackState, // State, // RepeatMode, // Event, // Capability,
import React, { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '@store/index';
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
// import Control from '@components/Player/Control.component';
import TrackProgress from '@components/Player/TrackProgress.component';
import CoverArt from '@components/Player/CoverArt.component';

const { width } = Dimensions.get('window');

// const setupPlayer = async (songsData: any[]) => {
//   console.log('songsData', songsData);
//   try {
//     // await TrackPlayer.setupPlayer();
//     // await TrackPlayer.add(songsData);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const togglePlayback = async (playbackState: State) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();
//   if (currentTrack !== null) {
//     if (playbackState === State.Paused) {
//       await TrackPlayer.play();
//     } else {
//       await TrackPlayer.pause();
//     }
//   }
// };

function Player() {
  const {
    // currentSong,
    currentSongsList: data,
    currentIndex,
  } = useTypedSelector((state) => state.player);
  const navigation = useNavigation();

  const [songIndex, setSongIndex] = useState<number>(currentIndex);

  const scrollX = useRef(new Animated.Value(songIndex * width)).current;

  // const playbackState = usePlaybackState();

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
  }, []);

  // useEffect(() => {
  //   setupPlayer(data);
  // }, []);

  const splitColor = data[songIndex]?.images?.joecolor.split(':');
  const backgroundColor = splitColor
    ? `#${splitColor[splitColor.length - 1]}`
    : '#1f2937';

  return (
    <View className="flex-1" style={{ backgroundColor }}>
      <View className="flex-1 pt-12">
        <View className="px-4 py-2 flex-row justify-between items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronDownIcon color="white" />
          </Pressable>
          <Pressable>
            <EllipsisVerticalIcon color="white" />
          </Pressable>
        </View>
        <Animated.FlatList
          renderItem={({ item }) => <CoverArt currentSong={item} />}
          data={data}
          initialScrollIndex={songIndex}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScrollToIndexFailed={() => {}}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        />

        <View className="px-4 py-6 bg-black/50 rounded-t-2xl">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-white font-poppinsSemiBold text-xl">
                {data[songIndex]?.title}
              </Text>
              <Text className="text-gray-300 font-poppinsMedium truncate">
                {data[songIndex]?.subtitle}
              </Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="white" />
            {/* <FontAwesome name="heart" size={24} color="#16a34a" /> */}
          </View>
          {/* Track progress */}
          <TrackProgress />
          {/* Controls */}
          {/* <Control
            playbackState={playbackState}
            togglePlayback={togglePlayback}
          /> */}
        </View>
      </View>
    </View>
  );
}

export default Player;
