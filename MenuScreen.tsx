import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { useDishes } from './DishesContext';

const MenuScreen = ({ navigation }: { navigation: any }) => {
  const { getAveragePrice } = useDishes();

  // Get average prices for each category from context
  const averageStarterPrice = getAveragePrice('starter');
  const averageMainPrice = getAveragePrice('main');
  const averageDessertPrice = getAveragePrice('dessert');

  return (
    <ImageBackground 
      source={require('./assets/background.png')} // Change to your menu background image
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity style={styles.imageButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/arrow.png')} // Replace with your image for the button
          style={styles.imageIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Starters')}>
              <Text style={styles.buttonText}>Starters</Text>
            </TouchableOpacity>
            <Text style={styles.averagePrice}>R{averageStarterPrice.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Mains')}>
              <Text style={styles.buttonText}>Mains</Text>
            </TouchableOpacity>
            <Text style={styles.averagePrice}>R{averageMainPrice.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Desserts')}>
              <Text style={styles.buttonText}>Desserts</Text>
            </TouchableOpacity>
            <Text style={styles.averagePrice}>R{averageDessertPrice.toFixed(2)}</Text>
          </View>
        </View>
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '50%', // Adjust button width to make it narrower
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  averagePrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MenuScreen;
