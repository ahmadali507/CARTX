"use client"
import { createContext,  useState, ReactNode } from 'react';

export type PriceContextType =  {
  price: number | null;
  setPrice: React.Dispatch<React.SetStateAction<number | null>>; 
}

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


