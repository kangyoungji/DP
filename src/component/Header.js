import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(){
	return(
		<header id="header" className="up">
			<Logo />
			<div className="hd-menu">
				<Navigation />
			</div>
			<div className="hd-info">
				<div className="lang">
					<a href="" className="on">KOR</a>
					<a href="">ENG</a>
				</div>
				<div className="hd-allmenu-open">
					<div type="button" className="btn-set">
						<div className="btn-all-menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;