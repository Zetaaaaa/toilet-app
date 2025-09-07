import { NextFont } from 'next/dist/compiled/@next/font';
import { Input } from "@/components/ui/input"

interface SearchbarProps {
  font: NextFont;
  text: string
 
}


function Searchbar({font,text}: SearchbarProps ) {
  return (
    <div >
      <Input type='search'></Input>
    </div>
  );
}

export default Searchbar