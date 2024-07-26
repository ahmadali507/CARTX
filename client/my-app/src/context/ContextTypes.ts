import { itemData } from "@/components/Comp/Additems";
import { CardProps } from "@/components/ui/CustomCard";
import React from "react";

export type PriceContextType = {
    price : number | null;  
    setPrice :  React.Dispatch<React.SetStateAction<number | null>>; 
}

export type BrandContextType = {
    selectedBrands: string[], 
    setBrand :  React.Dispatch<React.SetStateAction<string[]>> 
}

export type TotalPriceofItems = {
    total : number; 
    setTotal : React.Dispatch<React.SetStateAction<number>>; 
}

export type CartItems = {
     item : CardProps, 
     quantity : number,
     totalPrice : number, 
}

export type CartContextType = {
    cartItems : CartItems[], 
    setCartItems : React.Dispatch<React.SetStateAction<CartItems[]>>; 
    totalItems : number, 
    settotalItems : React.Dispatch<React.SetStateAction<number>>; 
}