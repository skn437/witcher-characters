import Link from "next/link";
import HeadAll from "../components/HeadAll";
import styles from "./404.module.scss";

const NotFound = () => {

    return (

        <>

            <HeadAll title="Not Found"></HeadAll>

            <div id={styles.not_found}>

                <h1>Ooooopsss!!!</h1>
                <h2>The Page Cannot Be Found!</h2>
                <p>Go back to <Link href="/"><a>Home</a></Link></p>

            </div>

        </>

    );

};
 
export default NotFound;