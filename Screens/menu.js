import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


const songs = [
    {
      name: 'cafe latte',
      detail: 'un cafe muy rico con leche',
      image: 'http://cdn.shopify.com/s/files/1/0349/7571/1291/products/ATD_CafeLatte_01_3b077121-2fb7-4058-8dac-fd1cc97ef282.jpg?v=1587770572',
      price:'$2',
    },
    {
        name: 'cafe americano',
        detail: 'cafe negro puro',
        image: 'https://cafetrespremium.com.mx/wp-content/uploads/2020/10/americano.jpg',
        price:'$1.50',
      },
      {
        name: 'sandwich de atun',
        detail: 'un delicioso snadwich de atun',
        image: 'https://www.pequerecetas.com/wp-content/uploads/2010/05/como-hacer-sandwich-de-atun.jpg',
        price:'$5',
      },
      {
        name: 'croissant de jamon y queso',
        detail: 'rico croissant repleto de jamon y queso',
        image: 'https://mejorconsalud.as.com/wp-content/uploads/2015/07/croissants-de-jam%C3%B3n-y-queso.jpg',
        price:'$2',
      },
      {
        name: 'pink lemonade',
        detail: 'limonada de fresa',
        image: 'https://divascancook.com/wp-content/uploads/2022/03/best-hot-pink-lemonade-recipe.jpg',
        price:'$2',
      }
  ]

export default function Menu({navigation}) {
  return (
    <View >
      <SafeAreaView>
    <ScrollView style={styles.scroll_container}>
            <View>
            {
              songs.map((song, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Home")}>
                  <Avatar rounded source={{uri: song.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>{song.name}</ListItem.Title>
                    
                    <ListItem.Subtitle>{song.detail}</ListItem.Subtitle>
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