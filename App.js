
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import home from './Screens/home';
import menu from './Screens/menu';
import about from './Screens/about';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Menu = createDrawerNavigator()
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Menu.Navigator>
<Menu.Screen name="Home" component={home} />
<Menu.Screen name="About" component={about} />
<Menu.Screen name="Menu" component={menu} />
<Menu.Screen name="Tab" component={Tab} />
</Menu.Navigator>
</NavigationContainer>

   
  );
}

function Tab(){
  return(


<Stack.Navigator>
<Stack.Screen name="Home" component={home} />
<Stack.Screen name="About" component={about} />
<Stack.Screen name="Menu" component={menu} />

</Stack.Navigator>


  );
};
function Men(){
  return(

<Menu.Navigator>
<Menu.Screen name="Home" component={home} />
<Menu.Screen name="About" component={about} />
<Menu.Screen name="Menu" component={menu} />
</Menu.Navigator>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});