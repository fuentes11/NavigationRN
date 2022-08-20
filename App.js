import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import home from './Screens/home';
import menu from './Screens/menu';
import about from './Screens/about';

const Menu = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
<Menu.Navigator>
<Menu.Screen name="Home" component={home} />
<Menu.Screen name="About" component={about} />
<Menu.Screen name="Menu" component={menu} />
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

