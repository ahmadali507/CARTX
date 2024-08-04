import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddtoCart from "./AddtoCart";

export type CardProps = {
  description: string,
  imgUrl: string,
  name: string,
  price: number,
  brand: string, 
  id?: string | null | undefined, 
  __v?: number, 
  category?: string | undefined, 
}

const CustomCard = ({ item }: { item: CardProps }) => {
  return (
    <div>
      <Card className="bg-slate-950 h-auto md:w-[20vw] lg:w-[20vw] sm:w-32 border-[3px] border-slate-900 shadow-lg shadow-slate-800 hover:shadow-slate-400 flex flex-col">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="text-center font-mono text-white mb-2">{item.name}</CardTitle>
          <div className="relative w-[92%] h-[14rem] overflow-hidden">
            <img 
              src={item.imgUrl} 
              alt={item.name} 
              className="object-cover w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-bg-slate-200 font-medium text-xl text-slate-200 h-[5rem] overflow-ellipsis">{item.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-[1.4rem] font-thin font-mono text-slate-200 w-32 h-8 overflow-x-auto">${item.price}</p>
          <AddtoCart item={item} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
