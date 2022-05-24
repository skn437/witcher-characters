import Head from "next/head";

const HeadAll = ({ title }) => {

    return (

        <Head>

            <title>Witcher | {title}</title>
            <link rel="icon" href="/witcher.ico"></link>

        </Head>

    );

};
 
export default HeadAll;