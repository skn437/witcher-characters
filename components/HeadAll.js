import Head from "next/head";

const HeadAll = ({ title }) => {

    return (

        <Head>

            <title>Witcher | {title}</title>

        </Head>

    );

};
 
export default HeadAll;