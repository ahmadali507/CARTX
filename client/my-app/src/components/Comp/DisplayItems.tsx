import CustomCard, { CardProps } from '../ui/CustomCard';
// import { Button } from '../ui/button';
import AddItems from './Additems';

type DisplayItemsProps = {
  items: CardProps[] | undefined;
};

const DisplayItems = ({ items }: DisplayItemsProps) => {
  return (
    <section className="bg-black w-full text-center text-3xl text-slate-200 font-bold font-serif pt-8">
      Browse Categories
      <div className="flex flex-col items-center gap-10 justify-center py-[3.5rem] text-2xl font-semibold font-serif">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-20 w-full max-w-screen-lg justify-center md:justify-center">
          {items && items.length > 0 ? (
            items.map((item) => (
              <CustomCard item={item}  /> // Assuming `_id` is a unique identifier
            ))
          ) : (
            <p className="text-slate-200 text-lg">
              Items are not listed in this category yet.
            </p>
          )}
        </div>
         <AddItems/>
      </div>
    </section>
  );
};

export default DisplayItems;
