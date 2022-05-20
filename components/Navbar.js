import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

    return (

        <nav id={styles.navbar}>

            <h1>Witcher List</h1>

            <div id={styles.flex_container}>

                <p>Character Wiki</p>

                <ul id={styles.nav_container}>

                    <li><Link href="/"><a className={styles.nav_list}>Home</a></Link></li>
                    <li><Link href="/about"><a className={styles.nav_list}>About</a></Link></li>
                    <li><Link href="/witchers"><a className={styles.nav_list}>Witcher Characters</a></Link></li>

                </ul>

            </div>

        </nav>

    );

};
 
export default Navbar;