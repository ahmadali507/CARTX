import { CardProps } from '@/components/ui/CustomCard'
import React from 'react'

const Featured = ({items} : {items: CardProps[]} ) => {
  return (
    <div>
        <Carousel items = {items}/>
    </div>
  )
}

export default Featured
