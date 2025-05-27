# DesignPower

> skill :
GSAP, ScrollTrigger, Swiper ![JavaScript](https://img.shields.io/badge/-JavaScript-dc8d2d?style=flat-square&logo=javascript&logoColor=ffffff) ![HTML](https://img.shields.io/badge/-HTML-F05032?style=flat-square&logo=html5&logoColor=ffffff) ![CSS](https://img.shields.io/badge/-CSS-007ACC?style=flat-square&logo=css3) 

> 반응형 : 데스크탑, 탭, 모바일

 >https://dp-git-main-yeongjis-projects.vercel.app/


✅ Point
------------
✔ intro 구현  
✔ intro skip 버튼 구현
✔ MainSlide 

-------------------------------------------------

## 1. INTRO

메인 슬라이더가 나오기 전 텍스트와 이미지를 활용해 인트로 애니메이션을 구현. 인트로를 스킵할 수 있는 버튼 또한 구현
![Image](https://github.com/user-attachments/assets/365ee12c-f0d5-426b-99fc-afa43430af4e)

![HTML](https://img.shields.io/badge/-HTML-F05032?style=flat-square&logo=html5&logoColor=ffffff)   


```
<div class="intro">
 <div class="title">
  <div class="title-m">비지니스에 힘이 되는 디자인<small>,</small></div>
  <div class="title-t">
   <span class="txt-t">
    <img src="images/logo_t.svg" class="color" alt="logo t">
    <img src="images/logo_t_w.svg" class="white" alt="logo t w">
   </span>
   <span class="hidden-t">
    <img src="images/old_logo_t1.png" class="basic" alt="old logo t1">
    <img src="images/old_logo_t2.png" class="color" alt="old logo t2">
   </span>
  </div>
  <div class="title-p">
   <span class="txt-p">
    <img src="images/logo_p.svg" class="color" alt="logo p">
    <img src="images/logo_p_w.svg" class="white" alt="logo p w">
   </span> 
   <span class="hidden-t">
    <img src="images/old_logo_p1.png" class="basic" alt="old logo p1">
    <img src="images/old_logo_p2.png" class="color" alt="old logo p2">
   </span>
  </div>
 </div>
 <div class="skip-btn"><a href="">Skip</a></div>
</div>
```

> 텍스트가 아닌 png, svg를 활용해 인트로 애니메이션을 구현했습니다. 
> 텍스트가 아닌 png와 svg를 활용하면 이미지의 품질이 유지되어 해상도와 상관없이 선명하고 매력적인 시각 효과를 줄 수 있습니다. 
> 또한 CSS와 JavaScript와 결합하여 더욱 다양한 애니메이션 효과를 줄 수 있습니다. 
> 그렇기에 이미지를 활용하여 intro를 제작하였습니다.






## Skip
![Image](https://github.com/user-attachments/assets/7ef99dc5-5ba9-479d-a38f-4a08fca396a1)

![JavaScript](https://img.shields.io/badge/-JavaScript-dc8d2d?style=flat-square&logo=javascript&logoColor=ffffff)

```
	let skipBtn=document.querySelector(".skip-btn a");
	let intro=document.querySelector(".intro");

	skipBtn.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(".intro", {opacity: 0, duration: 1, onComplete: function(){
			intro.style.display="none";
			mainSwiper.autoplay.start();
		}});
	});

```

>**skip버튼 구현**  
>skipBtn과 intro로 변수를 저장해 두고 click했을 때 intro의 display가 none이 되도록 합니다. 또한 메인 슬라이드가 자동 재생이 시작되도록 합니다.















