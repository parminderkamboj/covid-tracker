import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from './components/TabBarIcon';
import SummaryContainer from './summary/SummaryContainer';
import LocalContainer from './local/LocalContainer';
import TimelineContainer from './timelines/TimelineContainer';
import StatesListContainer from './states/StatesListContainer';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'summary';
export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="summary"
        component={SummaryContainer}
        options={{
          title: 'Summary',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
        }}
      />
      <BottomTab.Screen
        name="Plots"
        component={TimelineContainer}
        options={{
          title: 'Current Cases',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-trending-up" />,
        }}
      />
      <BottomTab.Screen
        name="US"
        component={StatesListContainer}
        options={{
          title: 'US',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
      <BottomTab.Screen
        name="Local"
        component={LocalContainer}
        options={{
          title: 'Local',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pin" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'summary':
      return 'Summary';
    case 'summary':
      return 'Links to learn more';
  }
}
