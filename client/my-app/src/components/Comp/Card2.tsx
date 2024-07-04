import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type CategoryProps = {
  value: {
    url: string, 
    title: "Laptop" | "Clothes" | "Tech",
  }
  path: string,
}

const Card2: React.FC<CategoryProps> = ({ value, path }) => { 
  const navigate = useNavigate(); 
  const Navigate = (): void => {
    navigate('/api/additem'+path);
  };
  return (
    <div>
      <Card className="relative bg-cover bg-center h-[60vh] w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl outline-none shadow-md" style={{ backgroundImage: `url(${value.url})` }} onClick={Navigate}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <CardHeader className="relative">
          <CardDescription className="pt-36 text-white text-2xl">{value.title}</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <p> </p>
        </CardContent>
        <CardFooter className="relative">
          <p> </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Card2;
