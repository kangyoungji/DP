import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderInfo from "./HeaderInfo";

function Header(){
	return(
		<section className="sec-header">
			<header id="header" className="up">
				<Logo />
				<Navigation />
				<HeaderInfo />
			</header>
		</section>
	);
}

export default Header;