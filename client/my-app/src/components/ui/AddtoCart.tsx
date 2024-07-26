import React, { useContext, useEffect } from "react";
import { Button } from "./button";
import { CartContext } from "@/context/context";
import { CardProps } from "./CustomCard";

const AddtoCart = ({ item }: { item: CardProps }) => {
  const { cartItems, setCartItems, settotalItems, totalItems } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addtoCart = () => {
    settotalItems(totalItems + 1); 
    const itemExists = cartItems.find(
      (cartItem) => cartItem.item.name === item.name
    );

    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.item.name === item.name
            ? {
                item : item,
                quantity: cartItem.quantity + 1,
                totalPrice: cartItem.totalPrice + item.price,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { item, quantity: 1, totalPrice: item.price },
      ]);
    }
  };

  return (
    <div>
      <Button
        className="bg-black border-2 border-white text-[1.2rem] text-center active:bg-slate-300 active:text-black"
        onClick={addtoCart}
      >
        Add to Cart.
      </Button>
    </div>
  );
};

export default AddtoCart;
