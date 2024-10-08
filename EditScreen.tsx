import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Image } from 'react-native';
import { useDishes } from './DishesContext';

const EditScreen = ({ navigation }: { navigation: any }) => {
  const { dishes, editDish, setDishes } = useDishes(); // Fetch data from the context
  const [selectedCategory, setSelectedCategory] = useState<'starter' | 'main' | 'dessert'>('starter');
  const [selectedDish, setSelectedDish] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Filter dishes based on selected category
  const filteredDishes = dishes.filter(dish => dish.category === selectedCategory);

  const handleSelectDish = (dish) => {
    setSelectedDish(dish);
    setName(dish.name);
    setDescription(dish.description);
    setPrice(dish.price);
  };

  const handleEditDish = () => {
    if (selectedDish) {
      editDish({
        ...selectedDish,
        name,
        description,
        price,
      });
      setSelectedDish(null); // Clear selection after editing
    }
  };

  const handleDeleteDish = (dishId) => {
    setDishes((prevDishes) => prevDishes.filter(dish => dish.id !== dishId));
    setSelectedDish(null); // Clear selection after deleting
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
        <Text style={styles.title}>Edit Dish</Text>

        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={() => setSelectedCategory('starter')}>
            <Text style={selectedCategory === 'starter' ? styles.selected : styles.unselected}>Starter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('main')}>
            <Text style={selectedCategory === 'main' ? styles.selected : styles.unselected}>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('dessert')}>
            <Text style={selectedCategory === 'dessert' ? styles.selected : styles.unselected}>Dessert</Text>
          </TouchableOpacity>
        </View>

        <FlatList
  data={filteredDishes}
  keyExtractor={(item) => item.id.toString()}  // Use the dish ID as a key
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleSelectDish(item)} style={styles.dishItem}>
      <Text style={styles.dishName}>{item.name}</Text>
    </TouchableOpacity>
  )}
/>


        {selectedDish && (
          <View style={styles.editContainer}>
            <TextInput placeholder="Dish Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
            <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} />

            <TouchableOpacity style={styles.button} onPress={handleEditDish}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.deleteButton]} 
              onPress={() => handleDeleteDish(selectedDish.id)} // Delete button works now
            >
              <Text style={styles.buttonText}>Delete Dish</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 40, // Match the title size from AddScreen
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  selected: {
    color: 'green',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  unselected: {
    color: 'black',
    marginHorizontal: 10,
  },
  dishItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  dishName: {
    fontSize: 18,
  },
  editContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
});

export default EditScreen;
