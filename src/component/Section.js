function Section(){
	return(
		<>
		<div className="sec4">
			<div className="main-title">
				<p>홈페이지 운영</p>
				<h3>유지관리는 전문 업체</h3>
			</div>
			<div className="main-esg">
				<ul>
					<li>
						<a href="">
							<div className="content">
								<img src="/images/main_esg1.png" alt="main_esg1" />
								<h4>Environmental</h4>
								<p>환경</p>
							</div>
							<img src="/images/main_esg_circle.png" alt="main_esg_circle" />
						</a>
					</li>
					<li>
						<a href="">
							<div className="content">
								<img src="/images/main_esg2.png" alt="main_esg" />
								<h4>Social</h4>
								<p>사회</p>
							</div>
							<img src="/images/main_esg_circle.png" alt="main_esg_circle" />
						</a>
					</li>
					<li>
						<a href="">
							<div className="content">
								<img src="/images/main_esg3.png" alt="main_esg" />
								<h4>Ethical</h4>
								<p>윤리</p>
							</div>
							<img src="/images/main_esg_circle.png" alt="main_esg_circle" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="sec5">
			<div className="cont">
				<div className="left">
					<div className="main-title">
						<p>미디어</p>
						<h3>새로운 소식</h3>
						<div className="btns">
							<a className="btn" href="">더보기<i className="xi-angle-right-min"></i></a>
							<a className="btn" href="" target="_blank">Linked In 바로가기<i className="xi-angle-right-min"></i></a>
						</div>
					</div>
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="/images/news1.jpg" alt="news1" />
								</div>
								<div className="txt">
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록 </p>
									<p className="desc">
										<span className="cate">언론보도</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="/images/news2.jpg" alt="news2" />
								</div>
								<div className="txt">
									<p className="sbj">DP Living 장애인선수단 계약식</p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="/images/news2.jpg" alt="news2" />
								</div>
								<div className="txt">
									<p className="sbj">DP Living 장애인선수단 계약식</p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="/images/news1.jpg" alt="news1" />
								</div>
								<div className="txt">
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록 </p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="card">
						<a href="">
							<div className="thumb">
								<img src="/images/news3.jpg" alt="news3" />
							</div>
							<div className="txt">
								<p className="sbj">올 매출액 1조 재달성 목표</p>
								<p className="desc">
									<span className="cate">언론보도</span>
									2024-11-01
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		</>
	
	);
}

export default Section;