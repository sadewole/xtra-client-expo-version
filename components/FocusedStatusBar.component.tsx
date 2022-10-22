import { StatusBar, StatusBarProps } from 'react-native';

function FocusedStatusBar(props: StatusBarProps) {
  return <StatusBar animated {...props} />;
}

export default FocusedStatusBar;
