import { useRouter } from "next/router";

export const getStaticPaths = async () => {
	return {
		paths: [
			{
				params: { id: "1" },
			},

			{
				params: { id: "2" },
			},

			{
				params: { id: "3" },
			},
		],
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;

	return {
		revalidate: 10,
		props: {
			myHell: "Hell",
			myHeaven: "Heaven",
			myId: id,
		},
	};
};

const MyFruits = props => {
	const router = useRouter();

	console.log(router.query);

	return <div>Hello</div>;
};

export default MyFruits;
