import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {

    return (

        <Layout>

            <Component {...pageProps}></Component>

        </Layout>

    );

};
 
export default MyApp;