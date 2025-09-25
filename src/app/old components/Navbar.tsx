"use client"
import localFont from 'next/font/local'
import Button from '../components/Button'
import styles from '../styles/navBar.module.css'
import Searchbar from '../components/Searchbar'
import { useRouter,usePathname } from 'next/navigation'

const font = localFont({
        src: "../fonts/geograph/geographweblight.ttf",
})


function Navbar() {
      const router  = useRouter() 
      const path = usePathname()

      //Routing by updating component,then useEffect
      // const [route ,setRoute]= useState(" ")
      // useEffect(()=>{

      //       router.push(route)
      
      // },[route])

      function handleClick(route:string){
            // setRoute(route)
            router.push(route.split(' ')[0].toLocaleLowerCase())
      }


  return (
      <div className={styles.topBar}>
          <div className={styles.searchBar}>
                <Searchbar font={font} text={"Search for an address of a Toilet Point"}></Searchbar>
               </div>
               <div className={styles.navButtons}>
                <Button font={font} text="About" click={handleClick}></Button>
                <Button font={font} text="playground" click={handleClick}></Button>
                <Button font={font} text="Contact Us" click={handleClick}></Button>
                
               </div>
        </div>
  )
}

export default Navbar
