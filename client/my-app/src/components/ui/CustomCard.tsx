import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";

type CardProps = {
    description: string,
    imgUrl: string,
    title: string,
    price: number,
}

const CustomCard: React.FC<CardProps> = ({ description, title, price, imgUrl }) => {
  return (
    <div>
      <Card className="bg-slate-300 h-[48vh] md:w-[20vw] lg:md:w-[20vw] sm:w-32">
        <CardHeader>
          <CardTitle className="text-center font-mono">{title}</CardTitle>
          <img src={imgUrl} alt="" height={200} width={200} />
        </CardHeader>
        <CardContent>
          <p className="text-center text-bg-slate-200 font-medium">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center flex-shrink-0">
          <p>${price}</p>
          <Button className="w-16 h-8 text-[0.7rem] bg-green-700">Add item</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
