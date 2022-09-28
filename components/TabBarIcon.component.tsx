import {
  HomeIcon as SolidHomeIcon,
  MagnifyingGlassIcon as SolidMagnifyingGlassIcon,
  UserCircleIcon as SolidUserCircleIcon,
  SwatchIcon as SolidSwatchIcon,
} from 'react-native-heroicons/solid';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  SwatchIcon,
} from 'react-native-heroicons/outline';

const Icons = (focused: boolean) => ({
  Home: focused ? SolidHomeIcon : HomeIcon,
  Search: focused ? SolidMagnifyingGlassIcon : MagnifyingGlassIcon,
  Profile: focused ? SolidUserCircleIcon : UserCircleIcon,
  Library: focused ? SolidSwatchIcon : SwatchIcon,
});

export default function TopBarIcon(
  name: string,
  { color, focused }: { color: string; focused: boolean }
) {
  const Icon = Icons(focused)[name];
  return <Icon color={color} size={26} />;
}
