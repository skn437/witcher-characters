import path from "path";
import fs from "fs";

export const getStaticProps = () => {
	const txt =  fs.readFileSync(path.join(process.cwd(), "public/hell.txt"), {
		encoding: "utf8",
	});

	return {
		revalidate: 10,
		props: {
			myNumber: Math.random() * 10,
			myPI: Math.PI,
			myHell: txt,
		},
	};
};

const DynamicNumbers = props => {
	return (
		<div>
			<p>Dynamic number: {props.myNumber}</p>
			<p>PI: {props.myPI}</p>
			<p>Hell: {props.myHell}</p>
		</div>
	);
};

export default DynamicNumbers;
