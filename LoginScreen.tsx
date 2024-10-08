import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'chef' && password === 'chef1234') {
      setIsLoggedIn(true);
      ToastAndroid.show('Success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Try again', ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground 
      source={require('./assets/background.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      {/* Return Image Button */}
      <TouchableOpacity style={styles.imageButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/arrow.png')} // Replace with your return button image
          style={styles.imageIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          value={username} 
          onChangeText={setUsername} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          value={password} 
          onChangeText={setPassword} 
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {isLoggedIn && (
          <View style={styles.additionalButtons}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Edit')}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Add')}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
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
    top: 65,  // Adjust as needed
    left: 40, // Adjust as needed
  },
  imageIcon: {
    width: 100,  // Adjust size as needed
    height: 40, // Adjust size as needed
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the start (top)
    alignItems: 'center',
    paddingTop: 100, // Add padding to position elements below the title
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    marginBottom: 100,
    marginTop: -48,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  additionalButtons: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
});

export default LoginScreen;
