import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'react-native';

function FocusedStatusBar(props: StatusBarProps) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated {...props} /> : null;
}

export default FocusedStatusBar;
