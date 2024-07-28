import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const selectMenuData = [
    "Price:High to Low", 
    "Price:Low to High", 
    "A-Z", 
    "Z-A",
    "All"
]
const DropdownFilter = () => {

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[15rem] h-12 backdrop-blur-sm bg-slate-900 text-[1.2rem] font-medium font-mono border-2 border-slate-500">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="border-2 border-slate-500 backdrop-blur-lg text-white  bg-transparent">
            
            {    selectMenuData.map((value, index) => (
                    <SelectItem key={index} value={value} className="text-[1.2rem] text-pretty"> {value
                    }</SelectItem>
                )
            
           )}
          
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownFilter;
