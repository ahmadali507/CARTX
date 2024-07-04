import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";

export  type CardProps = {
    description: string,
    imgUrl: string,
    title: string,
    price: number,
    id?: string | null | undefined, 
    __v?: number, 
    category?: string  | undefined, 
}

const CustomCard  = ({ props } : {props : CardProps}) => {
  return (
    <div>
      <Card className="bg-slate-300 h-[50vh] md:w-[20vw] lg:md:w-[20vw] sm:w-32">
        <CardHeader>
          <CardTitle className="text-center font-mono">{props.title}</CardTitle>
          <img src={props.imgUrl} alt="" height={200} width={300} />
        </CardHeader>
        <CardContent>
          <p className="text-center text-bg-slate-200 font-medium">{props.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-start  flex-shrink-0">
          <p className="text-[1rem] ">Price  ${props.price}</p>
          <Button className="w-24 h-10 text-[0.9rem] bg-green-700 relative bottom-1">Add item</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
