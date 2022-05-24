import Head from "next/head";
import Image from "next/image";
import HeadAll from "../components/HeadAll";
import styles from "./index.module.scss";

const Home = () => {
	return (
		<>
			<HeadAll title="Home"></HeadAll>

			<div id={styles.home}>
				<h1 id={styles.heading}>Home</h1>
			</div>
		</>
	);
};

export default Home;
