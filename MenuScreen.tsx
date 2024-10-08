import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';

const MenuScreen = ({ navigation }: { navigation: any }) => {
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
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Starters')}>
    <Text style={styles.buttonText}>Starters</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Mains')}>
    <Text style={styles.buttonText}>Mains</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Desserts')}>
    <Text style={styles.buttonText}>Desserts</Text>
  </TouchableOpacity>
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
  categoryButton: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default MenuScreen;
