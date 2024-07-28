import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSingleItem from "./Carousel";
import { CardProps } from "@/components/ui/CustomCard";
const MainCarousel = ({items} : {items : CardProps[] | undefined}) => {
  return (
    <div>
     
      <Carousel opts={{align : 'center'}}>
        <CarouselContent className="-ml-1" >
            <CarouselSingleItem items = {items}/>
        </CarouselContent>
        <CarouselPrevious className="bg-black border-2 absolute left-4 border-white text-white text-xl w-10 h-10" />
        <CarouselNext className= "bg-black  absolute right-8 border-2 border-white text-white text-xl w-10 h-10"  />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
