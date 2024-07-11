import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

  const selectMenuData = [
    "10", "20", "30"
  ]
const SelectItems = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[5rem] h-12  backdrop-blur-sm bg-slate-900 text-[1.4rem] font-medium font-mono border-2 border-slate-500">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent className="border-2 border-slate-500 backdrop-blur-lg text-white  bg-transparent w-[5rem]">
            
            {    selectMenuData.map((value, index) => (
                    <SelectItem  key={index} value={value} className="text-[1.2rem] text-pretty w-[5rem]"> {value
                    }</SelectItem>
                )
            
           )}
          
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectItems
