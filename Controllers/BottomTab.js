import React from 'react';
import Drinks from '../Screens/drinks';
import Desert from '../Screens/desert';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
  return (
    <Tab.Navigator>
        <Tab.Screen name= "drinks" component={Drinks} options={{ headerShown: false  }}/>
        <Tab.Screen name= "desert" component={Desert} options={{ headerShown: false  }}/>
    </Tab.Navigator>
  );
}

