export type PriceContextType = {
    price : number | null;  
    setPrice :  React.Dispatch<React.SetStateAction<number | null>>; 
}

export type BrandContextType = {
    selectedBrands: string[], 
    setBrand :  React.Dispatch<React.SetStateAction<string[]>> 
}