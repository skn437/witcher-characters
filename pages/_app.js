import Layout from "../components/Layout";
import "../styles/globals.css";

console.log(`Hello from -app.js`);

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps}></Component>
		</Layout>
	);
};

export default MyApp;
