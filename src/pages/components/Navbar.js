import Link from 'next/link';
import styles from '@/styles/Home.module.css'
const Navbar = () => {

    return <div className={styles.navBar}>
           <img src="/panda.jpeg" className="w-6 rounded-full border-2 border-solid border-orange-900 mr-100"/>
        <div className="w-40 h-2/5 flex justify-between items-center" >
            <Link href="/" className={styles.linkers}>Home</Link>
            <Link href="/about" className={styles.linkers}>About Me</Link>
        </div>
       
            
       
    </div>
}
export default Navbar;