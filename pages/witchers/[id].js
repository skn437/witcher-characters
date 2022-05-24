import HeadAll from "../../components/HeadAll";

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	const paths = data.map((witcher) => {
		return {
			params: { id: witcher.id.toString() },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

	const data = await res.json();

	return {
		props: { witcher: data },
	};
};

const Details = ({ witcher }) => {
	return (
		<>
			<HeadAll title="Details"></HeadAll>

			<div>
				<h2>{witcher.name}</h2>
				<p>{witcher.email}</p>
				<p>{witcher.website}</p>
				<p>{witcher.address.city}</p>
			</div>
		</>
	);
};

export default Details;
