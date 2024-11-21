// StarterScreen.tsx
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDishes } from './DishesContext';

const StarterScreen = ({ navigation }: { navigation: any }) => {
  const { dishes } = useDishes();
  const starters = dishes.filter(dish => dish.category === 'starter');

  return (
    <ImageBackground 
      source={require('./assets/background.png')}
      style={styles.background}
    >
      <TouchableOpacity style={styles.imageButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/arrow.png')} 
          style={styles.imageIcon}
        />
      </TouchableOpacity>
      
      <View style={styles.container}>
        <Text style={styles.title}>Starters</Text>
        <FlatList
          data={starters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.dishContainer}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>R{item.price}</Text>
              <View style={styles.separator} />
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageButton: {
    position: 'absolute',
    top: 65,
    left: 40,
  },
  imageIcon: {
    width: 100,
    height: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  dishContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  dishName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    width: '60%', 
    backgroundColor: 'black',
    marginVertical: 10,
  },
});

export default StarterScreen;
