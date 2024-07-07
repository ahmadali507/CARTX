import CustomCard, { CardProps } from '../ui/CustomCard';
import AddItems from './Additems';

type DisplayItemsProps = {
  items: CardProps[] | undefined;
};

const DisplayItems = ({ items }: DisplayItemsProps) => {
  return (
    <section className="flex flex-col items-center border-4 border-red-700 bg-black w-full text-center text-3xl text-slate-200 font-bold font-serif pt-8">
      Browse Categories
      <div className="flex flex-col border-2 border-red-800 w-[90vw] items-center gap-10 py-[3.5rem] text-2xl font-semibold font-serif">
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-20 w-full max-w-screen-xl justify-items-center">
            {items && items.length > 0 ? (
              items.map((item) => (
                <CustomCard item={item} /> // Assuming `_id` is a unique identifier
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
