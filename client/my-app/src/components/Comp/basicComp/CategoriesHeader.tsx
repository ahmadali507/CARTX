import SelectBrands from './SelectBrands'
import DropdownFilter from './DropdownFilter'
import SelectItems from './SelectItems'
import { brandProps } from '../DisplayItems'



const CategoriesHeader = ({brands} : {brands : brandProps[] | undefined} ) => {
  return (
    <div className='flex flex-row justify-between items-center w-full py-8 '>
      <SelectBrands  myprops = {brands}/>
      <div className='w-40% flex flex-row justify-center items-center gap-5'>
      <SelectItems/>
      <DropdownFilter/>
      </div>
    </div>
  )
}

export default CategoriesHeader
