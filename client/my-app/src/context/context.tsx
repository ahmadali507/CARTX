"use client"
import { createContext,  useState, ReactNode } from 'react';
import { BrandContextType, CartContextType, CartItems, PriceContextType, TotalPriceofItems } from './ContextTypes';


const initialPriceContext: PriceContextType = {
  price: 797897,
  setPrice: () => {},
};
export const PriceContext = createContext<PriceContextType>(initialPriceContext);
export const PriceProvider = ({ children } : {children:ReactNode}) => {
  const [price, setPrice] = useState<number | null>(null);
  return <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
   
};


const initialBrandContext : BrandContextType = {
  selectedBrands : [],  
  setBrand : () => {},
}

export const BrandContext = createContext<BrandContextType>(initialBrandContext); 
export const BrandProvider = ({children} : {children : ReactNode}) =>{
  const [selectedBrands, setBrand] = useState<string[]>([]); 
  return( <BrandContext.Provider value = {{selectedBrands, setBrand}}>
    {children}
  </BrandContext.Provider>
)}; 


export const TotalPriceContext = createContext<TotalPriceofItems>({
  total : 0, 
  quantitytotal : 0, 
  setQuantitytotal : () => {}, 
  setTotal : () => {}
}); 

export const TotalPriceProvider = ({children} : {children : React.ReactNode}) =>{
  const [total, setTotal] = useState<number>(0); 
  const [quantitytotal, setQuantitytotal] = useState<number>(0); 
  return <TotalPriceContext.Provider value = {{total, setTotal, quantitytotal, setQuantitytotal}}>
    {children}
  </TotalPriceContext.Provider>
}

export const CartContext = createContext<CartContextType>({
  cartItems : [], 
  setCartItems : () => {},
  totalItems : 0, 
  settotalItems : () => {}, 
});

export const CartProvider = ({children} : {children : React.ReactNode}) =>{
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [totalItems, settotalItems] = useState<number>(0);  
  return <CartContext.Provider value = {{cartItems, setCartItems, totalItems, settotalItems}}>
    {children}
  </CartContext.Provider>
}

