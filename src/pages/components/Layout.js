import Navbar from './Navbar';
import { motion} from 'framer-motion'
import { React, useEffect, useState } from 'react'
import '@/styles/Home.module.css'
const Layout = ({children, showHeader}) => {
  const duration=0.35
  const variants ={
    initial:{
      opacity:0,
      x:100
    },
    enter:{
      opacity: 1,
      x:0,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      }, 
    },
    exit:{
      opacity: 0,
      y:100,
      transition: {duration: duration}
    }
  }
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])
  
  return<>
        {isMounted && <Navbar/>}
        {showHeader && isMounted &&<Navbar  />   }
            <motion.div  variants={variants} initial="initial" animate="enter" exit="exit">
              {children}
            </motion.div>

  
  </>
}
export default Layout;
