import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div id="layout">
			<Navbar></Navbar>

			{children}

			<Footer></Footer>
		</div>
	);
};

export default Layout;
