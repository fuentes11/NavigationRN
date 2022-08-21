import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


const drinks = [
    {
      name: 'cafe latte',
      detail: 'un cafe muy rico con leche',
      image: 'http://cdn.shopify.com/s/files/1/0349/7571/1291/products/ATD_CafeLatte_01_3b077121-2fb7-4058-8dac-fd1cc97ef282.jpg?v=1587770572',
      price:'$2',
    },
    {
        name: 'ice soda',
        detail: 'ice soda mmm',
        image: 'https://www.12taste.com/in/wp-content/uploads/2020/03/American-Ic-Soda-01.jpg',
        price:'$1.50',
      },
      {
        name: 'fresatropical',
        detail: 'fresa soda',
        image: 'https://laconstancia.com/wp-content/uploads/2021/12/2.-Tropical-Fresa-12-oz.png',
        price:'$5',
      }
  ]

export default function Drinks({navigation}) {
  return (
    <View >
      <SafeAreaView>
    <ScrollView style={styles.scroll_container}>
            <View>
            {
              drinks.map((drinkss, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Home")}>
                  <Avatar rounded source={{uri: drinkss.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>{drinkss.name}</ListItem.Title>
                    
                    <ListItem.Subtitle>{drinkss.detail}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            </View>
        </ScrollView>

    </SafeAreaView>
      
    </View>
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