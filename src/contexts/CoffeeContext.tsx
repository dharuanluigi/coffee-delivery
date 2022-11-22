/** @format */

import { createContext, ReactNode, useState } from "react";
import { CoffeeModel } from "../components/CoffeeCard";
import { CartProps } from "../pages/Home";

export const CoffeeContext = createContext({} as any);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const totalItensInCart = cartItems.length;

  function addItemToCart(item: CoffeeModel, quantity: number) {
    const coffeeAlreadyAdded = cartItems.find(
      (cartItem) => cartItem.item.id === item.id
    );

    if (coffeeAlreadyAdded) {
      if (quantity > 0) {
        const allItemsUpdatedOne = cartItems.map((cartItem) => {
          if (cartItem.item.id === coffeeAlreadyAdded.item.id) {
            return {
              item: { ...item },
              quantity,
            };
          } else {
            return cartItem;
          }
        });

        setCartItems(allItemsUpdatedOne);
      } else {
        const removedOneItem = cartItems.filter(
          (cartItem) => cartItem.item.id !== item.id
        );

        setCartItems(removedOneItem);
      }
    } else {
      if (quantity > 0) {
        const newItemCart = {
          item: { ...item },
          quantity,
        };

        setCartItems((state) => [...state, newItemCart]);
      }
    }
  }

  return (
    <CoffeeContext.Provider value={{ addItemToCart, totalItensInCart }}>
      {children}
    </CoffeeContext.Provider>
  );
}
