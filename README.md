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

