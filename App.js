import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import home from './Screens/home';
import menu from './Screens/menu';
import about from './Screens/about';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drinks from './Screens/drinks';
import Desert from './Screens/desert';
import BottomTab from './Controllers/BottomTab';

const Menu = createDrawerNavigator()
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Menu.Navigator>
<Menu.Screen name="Menu" component={menu} />
<Menu.Screen name="Home" component={home} />
<Menu.Screen name="About" component={about} />
<Menu.Screen name="TabBar" component={BottomTab} />
</Menu.Navigator>
</NavigationContainer>

   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

