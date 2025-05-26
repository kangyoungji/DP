import data from "../data";

function Work(){
	let {work}=data;

	return(
		<div className="sec4">
			<div className="main-title">
				<p>홈페이지 운영</p>
				<h3>유지관리는 전문 업체</h3>
			</div>
			<div className="main-esg">
				<ul>
					{/*
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
					*/}

					{/*
					{
						work.map((d, i) => 
							<li key={i+1}>
								<a href="">
									<div className="content">
										<img src={"/images/"+d.image} alt={d.image.split(".")[0]} />
										<h4>{d.h4}</h4>
										<p>{d.p}</p>
									</div>
									<img src="/images/main_esg_circle.png" alt="main_esg_circle" />
								</a>
							</li>
						)
					}
					*/}

					{
						work.map((d, i) => <List key={i+1} propsValue={d} />)
					}
				</ul>
			</div>
		</div>
	);
}

function List(props){
	let {h4, p, image}=props.propsValue;

	return(
		<li>
			<a href="">
				<div className="content">
					<img src={"/images/"+image} alt={image.split(".")[0]} />
					<h4>{h4}</h4>
					<p>{p}</p>
				</div>
				<img src="/images/main_esg_circle.png" alt="main_esg_circle" />
			</a>
		</li>
	);
}

export default Work;