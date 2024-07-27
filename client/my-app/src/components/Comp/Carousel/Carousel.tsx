import { CarouselItem } from "@/components/ui/carousel";
import CustomCard, { CardProps } from "@/components/ui/CustomCard";
import React from "react";

const CarouselSingleItem = ({ items }: { items: CardProps[] | undefined }) => {
  console.log(items);
  return (
    <>
      {items?.map((item, index) => (
        (item.price >= 999) && 
        <CarouselItem className=" basis-1/2 mg:basis-1/3 lg:basis-1/4">
          <CustomCard item={item} key={index} />
        </CarouselItem>
      ))}
    </>
  );
};

export default CarouselSingleItem;
