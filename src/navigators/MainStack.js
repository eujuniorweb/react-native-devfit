import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import StarterStack from '../screens/StarterStack';
import AppTab from '../screens/AppTab';

const MainStack = createStackNavigator(
  {
    Preload,
    StarterStack,
    AppTab,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
