import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {

    return (

        <div id={styles.not_found}>

            <h1>Ooooopsss!!!</h1>
            <h2>The Page Cannot Be Found!</h2>
            <p>Go back to <Link href="/"><a>Home</a></Link></p>

        </div>

    );

};
 
export default NotFound;