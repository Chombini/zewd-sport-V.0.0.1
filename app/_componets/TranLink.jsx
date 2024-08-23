"use client"
    import { usePathname, useRouter } from "next/navigation"
    import { animatePageOut } from "@/utils/animation"
import { Button } from "@/components/ui/button"
    

    
    const TranLink = ({ href, label }) => {
      const router = useRouter()
      const pathname = usePathname()
    
      const handleClick = () => {
        if (pathname !== href) {
          animatePageOut(href, router)
        }
      }
    
      return (
        <Button
          // className='bg-primary flex justify-center px-5 py-3 rounded-md text-white font-semibold hover:bg-green-400'
          onClick={handleClick}
        >
          {label}
        </Button>
      )
    }
    
    export default TranLink 

