import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";

const Homepage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Button size='xl' className='rounded-full text-custom-color'> 
        <BadgePlus/>
        Click me 
      </Button>
    </div>
  )
}

export default Homepage;