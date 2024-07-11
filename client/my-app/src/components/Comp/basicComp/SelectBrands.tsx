import React, { useContext, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { brandProps } from "../DisplayItems";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PriceContext } from "@/context/context";

const SelectBrands = ({ myprops }: { myprops: brandProps[] | undefined }) => {
  const { price, setPrice } = useContext(PriceContext);
  const [localPrice, setLocalPrice] = useState(price == null  ? '' : price.toString);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalPrice(e.target.value);
  };

  const handleClick = () => {
    const priceValue  = parseFloat(localPrice);
    if (!isNaN(priceValue)) {
      setPrice(priceValue);
    } else {
      console.log('Invalid price value');
    }
  };

  return (
    <div>
      <Sheet>
        <div className="flex flex-row justify-start items-center gap-5">
          <SheetTrigger>
            <Menu className="size-10" />
          </SheetTrigger>
          <span className="text-[1.4rem] font-serif font-normal">
            Showing <strong>this</strong> out of <strong>that</strong> items
          </span>
        </div>
        <SheetContent className="bg-slate-950 border-l border-l-slate-800 text-white">
          <SheetHeader>
            <SheetTitle className="text-white text-[1.5rem] font-sans font-semibold">
              Price Range
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-row justify-center gap-10 items-center">
                <Input
                  className="bg-white w-[30%] text-black text-[1rem] font-bold"
                  value="0"
                  readOnly
                />
                <strong className="text-white text-2xl">-</strong>
                <Input
                  className="bg-white w-[30%] text-black text-[1rem] font-bold"
                  type="number"
                  value={localPrice === null ? "" : localPrice.toString()}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="flex flex-row justify-end w-[94%] mt-6">
                <Button className="bg-blue-600 w-[32%] text-[1rem]" onClick={handleClick}>
                  Set Price
                </Button>
              </div>
            </SheetDescription>
            <SheetTitle className="text-white text-[1.5rem] font-sans font-semibold mt-10">
              Brands Available
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col justify-center gap-4 items-start mt-10">
                {myprops?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`checkbox-${index}`}
                      className="h-5 w-5 border-2 border-white bg-white"
                    />
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="text-[1rem] text-slate-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.brand}
                    </label>
                  </div>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SelectBrands;
