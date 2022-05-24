import HeadAll from "../../components/HeadAll";
import styles from "../../styles/Characters.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await res.json();

	return {
		props: { witchers: data },
	};
};

const Witchers = ({ witchers }) => {
	return (
		<>
			<HeadAll title="Characters"></HeadAll>

			<div>
				<h1>Characters</h1>

				{witchers.length ? (
					witchers.map((witcher) => (
						<Link href={`/witchers/${witcher.id}`} key={witcher.id}>
							<div className={styles.character}>
								<p>{witcher.name}</p>
							</div>
						</Link>
					))
				) : (
					<div className={styles.character}>
						<p>No Witcher Character Available</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Witchers;
