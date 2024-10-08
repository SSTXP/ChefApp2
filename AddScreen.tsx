import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ToastAndroid } from 'react-native';
import { useDishes } from './DishesContext';

const AddScreen = ({ navigation }: { navigation: any }) => {
    const { addDish } = useDishes();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState<'starter' | 'main' | 'dessert'>('starter');
  
    const handleAdd = () => {
        addDish({
            id: 0, // ID will be automatically assigned
            name,
            description,
            price,
            category,
        });

        ToastAndroid.show('Dish added successfully', ToastAndroid.SHORT);
  
        // Clear the inputs after adding
        setName('');
        setDescription('');
        setPrice('');
    };
  
    return (
        <ImageBackground source={require('./assets/background.png')} style={styles.background} resizeMode="cover">
            <TouchableOpacity style={styles.imageButton} onPress={() => navigation.goBack()}>
                <Image 
                    source={require('./assets/arrow.png')} // Replace with your back button image
                    style={styles.imageIcon}
                />
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Add Dish</Text>
                <TextInput placeholder="Dish Name" value={name} onChangeText={setName} style={styles.input} />
                <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
                <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} />
  
                <View style={styles.categoryContainer}>
                    <TouchableOpacity onPress={() => setCategory('starter')}>
                        <Text style={category === 'starter' ? styles.selected : styles.unselected}>Starter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCategory('main')}>
                        <Text style={category === 'main' ? styles.selected : styles.unselected}>Main</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCategory('dessert')}>
                        <Text style={category === 'dessert' ? styles.selected : styles.unselected}>Dessert</Text>
                    </TouchableOpacity>
                </View>
  
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Add Dish</Text>
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
    imageButton: {
        position: 'absolute',
        top: 65, // Adjust as needed
        left: 40, // Adjust as needed
    },
    imageIcon: {
        width: 100,  // Adjust size as needed
        height: 40, // Adjust size as needed
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40, // Match the title size from LoginScreen
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'black',
        marginBottom: 100,
        marginTop: -125,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    selected: {
        color: 'green',
        fontWeight: 'bold',
        marginHorizontal: 10,
        textDecorationLine: 'underline',
    },
    unselected: {
        color: 'black',
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
    },
});

export default AddScreen;
