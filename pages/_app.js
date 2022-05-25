import Layout from "../components/Layout";
import "../styles/globals.scss";

console.log(`Hello from -app.js`);

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps}></Component>
		</Layout>
	);
};

export default MyApp;
