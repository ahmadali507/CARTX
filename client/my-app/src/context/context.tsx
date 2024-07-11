"use client"
import { createContext,  useState, ReactNode } from 'react';
import { BrandContextType, PriceContextType } from './ContextTypes';


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

