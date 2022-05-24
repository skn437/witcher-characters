import HeadAll from "../components/HeadAll";
import { useFetch } from "../hooks/FirebaseHooks";

const About = () => {
	const test = useFetch();

	return (
		<>
			<HeadAll title="About"></HeadAll>

			<div>
				<h1>About</h1>

				{test.length ? (
					test.map((doc) => (
						<div key={doc.id}>
							<p>{doc.name}</p>
						</div>
					))
				) : (
					<div>
						<p>Nothing to show</p>
					</div>
				)}
			</div>
		</>
	);
};

export default About;
