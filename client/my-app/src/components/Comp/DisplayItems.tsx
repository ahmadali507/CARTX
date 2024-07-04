import React from 'react'
import CustomCard, { CardProps } from '../ui/CustomCard'



type displayItemsProps = CardProps[]; 


const DisplayItems  = ({props} : { props : displayItemsProps}) => {

  return (
    <section className="bg-black w-full text-center text-3xl text-slate-200 font-bold font-serif pt-8">
      Browse Categories
      <div className="flex justify-center py-[3.5rem] text-2xl font-semibold font-serif">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-20 w-full max-w-screen-lg justify-center md:justify-center">
           {
            props.map((item, index) => (
              <CustomCard props = {item} key={index}/>            
            ))
           }
        </div>
      </div>
    </section>
  )
}

export default DisplayItems
