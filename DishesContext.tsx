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
}

// Create context with default values
const DishesContext = createContext<DishesContextType>({
  dishes: [],
  addDish: () => {},
  editDish: () => {},
  setDishes: () => {},
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

  return (
    <DishesContext.Provider value={{ dishes, addDish, editDish, setDishes }}>
      {children}
    </DishesContext.Provider>
  );
};
