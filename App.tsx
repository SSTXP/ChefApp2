import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './MenuScreen'; 
import LoginScreen from './LoginScreen';
import EditScreen from './EditScreen';  
import AddScreen from './AddScreen'; 
import { DishesProvider } from './DishesContext';
import StarterScreen from './StarterScreen'; // Import StarterScreen
import MainsScreen from './MainsScreen'; // Import MainsScreen
import DessertScreen from './DessertScreen'; // Import DessertScreen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DishesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Starters" component={StarterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Mains" component={MainsScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Desserts" component={DessertScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DishesProvider>
  );
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground 
      source={require('./assets/background1.webp')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          source={require('./assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 400,
    height: 150,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '60%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
