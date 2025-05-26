import data from '../data';

function Navigation(){
	let {navigation}=data;

	return(
		<div className="hd-menu">
			<nav className="gnb-wrap">
				<ul className="gnb">
					{/*
					<li>
						<a href="">회사소개</a>
						<div className="depth">
							<ul>
								<li><a href="">회사개요</a></li>
								<li><a href="">연혁</a></li>
								<li><a href="">조직도</a></li>
								<li><a href="">파트너</a></li>
								<li><a href="">오시는 길</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">사업부문</a>
						<div className="depth">
							<ul>
								<li><a href="">웹사이트</a></li>
								<li><a href="">홍보·마켓팅</a></li>
								<li><a href="">정보시스템</a></li>
								<li><a href="">서버·호스팅</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">솔루션</a>
						<div className="depth">
							<ul>
								<li><a href="">솔루션 소개</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">주요실적</a>
						<div className="depth">
							<ul>
								<li><a href="">주요실적 소개</a></li>
							</ul>
						</div>
					</li>
					*/}

					{
						navigation.map((d1, i) =>
							<li key={i+1}>
								<a href="">{d1.depth1}</a>
								<div className="depth">
									<ul>
										{
											d1.depth2.map((d2, j) =>
												<li key={j+1}><a href="">{d2}</a></li>
											)
										}
									</ul>
								</div>
							</li>
						)
					}
				</ul>
			</nav>
			<span className="hd-mak"></span>
		</div>
	);
}

export default Navigation;