import Link from 'next/link';
import styles from '@/styles/Home.module.css'
const Navbar = () => {

    return <div className={styles.navBar}>
            <h1>Alex</h1>
        <div className="w-40 h-2/5 flex justify-between items-center" >
            <Link href="/" className={styles.linkers}>Home</Link>
            <Link href="/about" className={styles.linkers}>About Me</Link>
        </div>
       
            
       
    </div>
}
export default Navbar;