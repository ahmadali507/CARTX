import { useContext } from 'react';
import CustomCard, { CardProps } from '../ui/CustomCard';
import AddItems from './Additems';
import CategoriesHeader from './basicComp/CategoriesHeader';
import { BrandContext, PriceContext } from '@/context/context';


export type brandProps = {
  brand : string, 
  category : string, 
}
export type DisplayItemsProps = {
  items: CardProps[];
  brands : brandProps[] | undefined
};

const DisplayItems = ( {items, brands} : DisplayItemsProps) => {
  const {price} = useContext(PriceContext); 
  const {selectedBrands} = useContext(BrandContext); 

  const filteredItems = items?.filter((item) => {
    const withinItems = price === null || item.price <= price; 
    const SelectedBrands = selectedBrands.length === 0 ||  selectedBrands.includes(item.brand); 
    return withinItems && SelectedBrands; 
  })
  return (
    <section className="flex flex-col items-center  bg-black w-full text-center text-3xl text-slate-200 font-bold font-serif pt-8">
      <div className='container text-xl '>
      <CategoriesHeader brands = {brands}/>
      </div>
      <div className="flex flex-col  w-[90vw] items-center gap-10 py-[3.5rem] text-2xl font-semibold font-serif">
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-20 w-full max-w-screen-xl justify-items-center">
          {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <CustomCard key={index} item={item} /> // Assuming `_id` is a unique identifier
              ))
            ) : (
              <p className="text-slate-200 text-lg">
                Items are not listed in this category yet.
              </p>
            )}
          </div>
        </div>
        <AddItems />
      </div>
    </section>
  );
};

export default DisplayItems;
