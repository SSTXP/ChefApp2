import React, { createContext, useContext, useState } from 'react';

// Define dish type
interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'starter' | 'main' | 'dessert';
}

// Define context type
interface DishesContextType {
  dishes: Dish[];
  addDish: (dish: Dish) => void;
  editDish: (dish: Dish) => void;
  setDishes: (dishes: Dish[]) => void;
  getAveragePrice: (category: 'starter' | 'main' | 'dessert') => number;
}

// Create context with default values
const DishesContext = createContext<DishesContextType>({
  dishes: [],
  addDish: () => {},
  editDish: () => {},
  setDishes: () => {},
  getAveragePrice: () => 0,
});

export const useDishes = () => useContext(DishesContext);

export const DishesProvider = ({ children }: { children: React.ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (newDish: Dish) => {
    setDishes((prevDishes) => [
      ...prevDishes,
      { ...newDish, id: prevDishes.length ? prevDishes[prevDishes.length - 1].id + 1 : 1 },
    ]);
  };

  // Edit an existing dish
  const editDish = (updatedDish: Dish) => {
    setDishes((prevDishes) =>
      prevDishes.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish))
    );
  };

  // Calculate the average price for a category
  const getAveragePrice = (category: 'starter' | 'main' | 'dessert'): number => {
    const filteredDishes = dishes.filter((dish) => dish.category === category);
    if (filteredDishes.length === 0) {
      return 0; // Return 0 if there are no dishes in the category
    }
    const totalPrice = filteredDishes.reduce((sum, dish) => sum + parseFloat(dish.price), 0);
    return totalPrice / filteredDishes.length;
  };

  return (
    <DishesContext.Provider value={{ dishes, addDish, editDish, setDishes, getAveragePrice }}>
      {children}
    </DishesContext.Provider>
  );
};
