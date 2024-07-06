import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from 'lucide-react';


export  type CardProps = {
    description: string,
    imgUrl: string,
    title: string,
    price: number,
    id?: string | null | undefined, 
    __v?: number, 
    category?: string  | undefined, 
}

const CustomCard  = ({ item }  : {item: CardProps}) => {
  console.log(item.imgUrl); 
  console.log(item)
  return (
    <div>
      <Card className="bg-slate-950 h-auto md:w-[20vw] lg:md:w-[20vw] sm:w-32 border-[3px] border-slate-900 shadow-lg shadow-slate-800 hover:shadow-slate-400">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="text-center font-mono">{item.title}</CardTitle>
          <img src={`http://localhost:8000${item.imgUrl}`} alt="" height={200} width={300} className= "border-5 border-red-700  h-[14rem] w-[90%] bg-cover" />
        </CardHeader>
        <CardContent>
          <p className="text-center text-bg-slate-200 font-medium text-xl text-slate-200 h-[5rem]">{item.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-start  flex-shrink-0">
          <p className="text-[1.4rem] font-thin font-mono text-slate-200  w-24 h-8">$ {item.price}</p>
          {/* <Button className="w-24 h-10 text-[0.9rem] bg-green-700 relative bottom-1">Add item</Button>
           */}
          {/* <ShoppingCart className="w-24 h-10 text-[0.9rem] color-white relative bottom-1"/>
           */}
             <ShoppingCart size={36} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth className="hover:bg-slate-800 border-5 rounded-lg "/>

        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
