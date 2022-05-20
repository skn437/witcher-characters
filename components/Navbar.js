import Link from "next/link";

const Navbar = () => {

    return (

        <nav id="navbar">

            <h1>Witcher List</h1>

            <ul>

                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/witchers"><a>Witcher Characters</a></Link></li>

            </ul>

        </nav>

    );

};
 
export default Navbar;