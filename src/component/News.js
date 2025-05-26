import data from '../data';

function News(){
	let {news}=data;

	let {newsData1, newsData2, newsData3}=news;

	return(
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
					{/*
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="/images/news1.jpg" alt="news1" />
								</div>
								<div className="txt">
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록</p>
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
					*/}

					{/*
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src={"/images/"+newsData1.desktop.image} alt={newsData1.desktop.image.split(".")[0]} />
								</div>
								<div className="txt">
									<p className="sbj">{newsData1.desktop.title}</p>
									<p className="desc">
										<span className="cate">{newsData1.desktop.tag}</span>
										{newsData1.desktop.date}
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src={"/images/"+newsData1.mobile.image} alt={newsData1.mobile.image.split(".")[0]} />
								</div>
								<div className="txt">
									<p className="sbj">{newsData1.mobile.title}</p>
									<p className="desc">
										<span className="cate">{newsData1.mobile.tag}</span>
										{newsData1.mobile.date}
									</p>
								</div>
							</a>
						</div>
					</div>
					*/}

					<div className="mo-none">
						<List propsValue={newsData1.desktop} />
					</div>
					<div className="pc-none">
						<List propsValue={newsData1.mobile} />
					</div>
				</div>
				<div className="right">
					{/*
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
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록</p>
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
					*/}

					{/*
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src={"/images/"+newsData2.desktop.image} alt={newsData2.desktop.image.split(".")[0]} />
								</div>
								<div className="txt">
									<p className="sbj">{newsData2.desktop.title}</p>
									<p className="desc">
										<span className="cate">{newsData2.desktop.tag}</span>
										{newsData2.desktop.date}
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src={"/images/"+newsData2.mobile.image} alt={newsData2.mobile.image.split(".")[0]} />
								</div>
								<div className="txt">
									<p className="sbj">{newsData2.mobile.title}</p>
									<p className="desc">
										<span className="cate">{newsData2.mobile.tag}</span>
										{newsData2.mobile.date}
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="card">
						<a href="">
							<div className="thumb">
								<img src={"/images/"+newsData3.image} alt={newsData3.image.split(".")[0]} />
							</div>
							<div className="txt">
								<p className="sbj">{newsData3.title}</p>
								<p className="desc">
									<span className="cate">{newsData3.tag}</span>
									{newsData3.date}
								</p>
							</div>
						</a>
					</div>
					*/}

					<div className="mo-none">
						<List propsValue={newsData2.desktop} />
					</div>
					<div className="pc-none">
						<List propsValue={newsData2.mobile} />
					</div>
					<List propsValue={newsData3} />
				</div>
			</div>
		</div>
	);
}

function List(props){
	let {title, tag, date, image}=props.propsValue;

	return(
		<div className="card">
			<a href="">
				<div className="thumb">
					<img src={"/images/"+image} alt={image.split(".")[0]} />
				</div>
				<div className="txt">
					<p className="sbj">{title}</p>
					<p className="desc">
						<span className="cate">{tag}</span>
						{date}
					</p>
				</div>
			</a>
		</div>
	);
}

export default News;