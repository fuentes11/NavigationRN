import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


const desert = [
    {
      name: 'Donnut',
      detail: 'Chocolate donnut with crispy',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price:'$2',
    },
    {
        name: 'ice cream',
        detail: 'chocolate ice cream',
        image: 'https://cookienameddesire.com/wp-content/uploads/2018/05/brownie-sundae.jpg',
        price:'$1.50',
      },
      {
        name: 'Pudin',
        detail: 'a delicious pudin',
        image: 'https://www.chileanfoodandgarden.com/wp-content/uploads/2012/01/semola-con-leche-10-scaled.jpg',
        price:'$5',
      }
  ]

export default function Desert({navigation}) {
  return (
    <View >
      <SafeAreaView>
    <ScrollView style={styles.scroll_container}>
            <View>
            {
              desert.map((deserts, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Home")}>
                  <Avatar rounded source={{uri: deserts.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>{deserts.name}</ListItem.Title>
                    <ListItem.Subtitle>{deserts.detail}</ListItem.Subtitle>
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