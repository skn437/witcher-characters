import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav id={styles.navbar}>
			<Image
				src="/witcher.ico"
				alt="witcher"
				width={115}
				height={100}
			></Image>

			<div id={styles.flex_container}>
				<p>Character Wiki</p>

				<ul id={styles.nav_container}>
					<li>
						<Link href="/">
							<a className={styles.nav_list}>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className={styles.nav_list}>About</a>
						</Link>
					</li>
					<li>
						<Link href="/witchers">
							<a className={styles.nav_list}>Characters</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
