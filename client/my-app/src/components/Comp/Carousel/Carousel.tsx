import CustomCard, { CardProps } from '@/components/ui/CustomCard'
import React from 'react'

const Carousel = ({items} : {items : CardProps[]}) => {
  return (
    <div>
      {
        items.map((item, index) => (
            <CustomCard item = {item}/>
               

        ))
      }
    </div>
  )
}

export default Carousel
