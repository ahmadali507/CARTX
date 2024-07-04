import React from "react";
import Card2 from "./Card2";
import { LAPTOP, clothes, tech } from "@/assets/picture";

const Categories: React.FC = () => {
  
  

  return (
    <section className="bg-black w-full text-center text-3xl text-slate-200 font-bold font-serif pt-8">
      Browse Categories
      <div className="flex justify-center py-[3.5rem] text-2xl font-semibold font-serif">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-20 w-full max-w-screen-lg justify-center md:justify-center">
          <Card2
            value={{
              url: LAPTOP,
              title: "Laptop",
            }}
            path = '/Laptop'
          />
          <Card2
            value={{
              url: clothes,
              title: "Clothes",
            }} 
            path = '/Clothes'
          />
          <Card2
            value={{
              url: tech,
              title: "Tech",
            }}
            path = '/Tech'
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
