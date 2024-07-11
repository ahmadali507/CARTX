import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideMenuSquare, Menu, MenuIcon, MenuSquare, MenuSquareIcon } from "lucide-react";
const SelectBrands = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex flex-row justify-start items-center gap-5">
            <Menu className="size-10"/>
            <span className="text-[1.4rem] font-serif font-normal ">Showing <strong>this</strong> out of <strong>that</strong> items</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>C</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SelectBrands;
