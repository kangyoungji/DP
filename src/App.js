import UIScript from './component/UIScript.js';
import Header from './component/Header.js';
import Intro from './component/Intro.js';
import MainSlider from './component/MainSlider.js';
import Blending from './component/Blending.js';
import Creative from './component/Creative.js';
import Work from './component/Work.js';
import News from './component/News.js';
import Footer from './component/Footer.js';
import './css/reset.css';
import './css/style.css';

function App(){
	return(
		<div className="wrap main">
			<UIScript />
			<section className="sec-wrap">
				<Header />
				<section className="sec-content">
					<div className="index">
						<Intro />
						<MainSlider />
						<Blending />
						<Creative />
						<Work />
						<News />
					</div>
				</section>
				<Footer />
			</section>
		</div>
	);
}

export default App;