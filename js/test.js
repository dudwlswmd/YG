// const menuItem = document.querySelectorAll('nav > ul > li> a');
// console.log(menuItem)

/*문서 내에서 부드럽게 이동(버튼의 href값을 각 섹션의 id와 동일하게 했을때)
menuItem.click(function(){
  var targetId = $(this).attr('href');  
  var targetIdT = $(targetId).offset().top;
  $('html,body').animate({scrollTop:targetIdT},500)
})*/

// menuItem.click(function(){
//   var targetSection = $(this).attr('data-target');  
//   var targetST = $(targetSection).offset();
//   $('html,body').animate({scrollTop:targetST.top},500)
// })


//스크롤 되면 헤더 모양이 바뀜
const header = document.querySelector('header')
const menuList = document.querySelector('.menu_list')

window.addEventListener('scroll', function(){
  header.classList.add('on');
  menuList.classList.add('on');
  if (window.scrollY == 0 ){ 
    header.classList.remove('on');
    menuList.classList.remove('on');
  }
})

//헤더 버튼
// menuItem.forEach(function(aa,index){
//   aa.onclick=function(e){
//     e.preventDefault();
//     document.querySelector(`#s${index+1}`).scrollIntoView({behavior:"smooth"})
//   }
// })

//v버튼
// for(let i = 1;i<=6;i++){
//   document.querySelector(`#s${i} .btnDown`).onclick=function(){
//   document.querySelector(`#s${i+1}`).scrollIntoView({behavior:"smooth"})
    
//   }
// }

// for(let i = 1; i <= 6; i++){
//   document.querySelector(`#s${i} .btnDown`).onclick = (function(index) {
//     return function() {
//       document.querySelector(`#s${index+1}`).scrollIntoView({behavior:"smooth"});
//     }
//   })(i);
// }





// const menuItem = document.querySelectorAll('nav > ul > li');
// const sections = document.querySelectorAll('section');

// // 페이지 로드 시에 현재 보여지는 section에 on 클래스 추가
// window.onload = function () {
//   const currentSection = document.querySelector('section.on');
//   const currentIdx = parseInt(currentSection.getAttribute('id').substr(1));
//   menuItem[currentIdx - 1].classList.add('on');
// };

// // 헤더 버튼 클릭 이벤트
// menuItem.forEach(function (menu, index) {
//   menu.onclick = function (e) {
//     e.preventDefault();
//     sections[index].scrollIntoView({ behavior: 'smooth' });
//   };
// });

// // 스크롤 이벤트
// window.addEventListener('scroll', function () {
//   const currentScroll = window.pageYOffset;
//   for (let i = 0; i < sections.length; i++) {
//     if (currentScroll >= sections[i].offsetTop - 100) {
//       // 현재 보여지는 section에 on 클래스 추가
//       sections.forEach((section) => section.classList.remove('on'));
//       sections[i].classList.add('on');

//       // menuItem에 on 클래스 추가
//       menuItem.forEach((menu) => menu.classList.remove('on'));
//       menuItem[i].classList.add('on');
//     }
//   }
// });

// const menuItem = document.querySelectorAll('nav > ul > li');
// const sections = document.querySelectorAll('section');

// // 페이지 로드 시에 현재 보여지는 section에 on 클래스 추가
// window.onload = function () {
//   const currentSection = document.querySelector('section.on');
//   const currentIdx = parseInt(currentSection.getAttribute('id').substr(1));
//   menuItem[currentIdx - 1].classList.add('on');
// };

// // 헤더 버튼 클릭 이벤트
// menuItem.forEach(function (menu, index) {
//   menu.onclick = function (e) {
//     e.preventDefault();
//     sections[index].scrollIntoView({ behavior: 'smooth' });
//   };
// });

// // 스크롤 이벤트
// window.addEventListener('scroll', function () {
//   const currentScroll = window.pageYOffset;
//   for (let i = 0; i < sections.length; i++) {
//     if (currentScroll >= sections[i].offsetTop - 100) {
//       // 현재 보여지는 section에 on 클래스 추가
//       sections.forEach((section) => section.classList.remove('on'));
//       sections[i].classList.add('on');

//       // menuItem에 on 클래스 추가
//       menuItem.forEach((menu) => menu.classList.remove('on'));
//       menuItem[i].classList.add('on');
//     }
//   }
// });


// const menuItem = document.querySelectorAll('nav > ul > li');
// const sections = document.querySelectorAll('section');

// // 페이지 로드 시에 현재 보여지는 section에 on 클래스 추가
// window.addEventListener('load', () => {
//   const currentIdx = parseInt(document.querySelector('section.on').id.substr(1)) - 1;
//   menuItem[currentIdx].classList.add('on');
// });

// // 헤더 버튼 클릭 이벤트
// menuItem.forEach((menu, index) => {
//   menu.onclick = (e) => {
//     e.preventDefault();
//     sections[index].scrollIntoView({ behavior: 'smooth' });
//   };
// });

// // 스크롤 이벤트
// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
//   let currentIdx = 0;

//   sections.forEach((section, index) => {
//     if (currentScroll >= section.offsetTop - 100) {
//       currentIdx = index;
//     }
//   });

//   // 현재 보여지는 section에 on 클래스 추가
//   sections.forEach((section) => section.classList.remove('on'));
//   sections[currentIdx].classList.add('on');

//   // menuItem에 on 클래스 추가
//   menuItem.forEach((menu) => menu.classList.remove('on'));
//   menuItem[currentIdx].classList.add('on');
// });


// const menuItem = document.querySelectorAll('nav > ul > li');
// const sections = document.querySelectorAll('section');

// // 페이지 로드 시에 현재 보여지는 section에 on 클래스 추가
// window.onload = function () {
//   const currentSection = document.querySelector('section.on');
//   const currentIdx = parseInt(currentSection.getAttribute('id').substr(1));
//   menuItem[currentIdx - 1].classList.add('on');
// };

// // 헤더 버튼 클릭 이벤트
// menuItem.forEach(function (menu, index) {
//   menu.onclick = function (e) {
//     e.preventDefault();
//     sections[index].scrollIntoView({ behavior: 'smooth' });
//   };
// });

// // 스크롤 이벤트
// window.addEventListener('scroll', function () {
//   const currentScroll = window.pageYOffset;
//   for (let i = 0; i < sections.length; i++) {
//     if (currentScroll >= sections[i].offsetTop - 100 && currentScroll < sections[i].offsetTop + sections[i].offsetHeight - 100) {
//       // 현재 보여지는 section에 on 클래스 추가
//       sections.forEach((section) => section.classList.remove('on'));
//       sections[i].classList.add('on');

//       // menuItem에 on 클래스 추가
//       menuItem.forEach((menu) => menu.classList.remove('on'));
//       menuItem[i].classList.add('on');
//     } else if (currentScroll >= sections[sections.length - 1].offsetTop + sections[sections.length - 1].offsetHeight - window.innerHeight) {
//       // 마지막 section이 화면에 보일 때 menuItem 마지막 li에 on 클래스 추가
//       menuItem.forEach((menu) => menu.classList.remove('on'));
//       menuItem[menuItem.length - 1].classList.add('on');
//     }
//   }
// });


// const menuItem = document.querySelectorAll('nav > ul > li');
// const sections = document.querySelectorAll('section');

// function setActiveMenu(index) {
//   // 현재 보여지는 section에 on 클래스 추가
//   sections.forEach((section) => section.classList.remove('on'));
//   sections[index].classList.add('on');

//   // menuItem에 on 클래스 추가
//   menuItem.forEach((menu) => menu.classList.remove('on'));
//   menuItem[index].classList.add('on');
// }

// // 페이지 로드 시에 현재 보여지는 section에 on 클래스 추가
// window.addEventListener('load', function () {
//   const currentSection = document.querySelector('section.on');
//   const currentIdx = parseInt(currentSection.getAttribute('id').substr(1));
//   setActiveMenu(currentIdx - 1);
// });

// // 헤더 버튼 클릭 이벤트
// menuItem.forEach(function (menu, index) {
//   menu.addEventListener('click', function (e) {
//     e.preventDefault();
//     sections[index].scrollIntoView({ behavior: 'smooth' });
//   });
// });

// // 스크롤 이벤트
// window.addEventListener('scroll', function () {
//   const currentScroll = window.pageYOffset;
//   let lastIndex = sections.length - 1;
//   if (currentScroll >= sections[lastIndex].offsetTop + sections[lastIndex].offsetHeight - window.innerHeight) {
//     setActiveMenu(lastIndex);
//   } else {
//     for (let i = 0; i < sections.length; i++) {
//       if (currentScroll >= sections[i].offsetTop - 100 && currentScroll < sections[i].offsetTop + sections[i].offsetHeight - 100) {
//         setActiveMenu(i);
//         break;
//       }
//     }
//   }
// });

const menuItem = document.querySelectorAll('.main_right > ul > li');
const sections = document.querySelectorAll('section');

// 페이지 로드 시 현재 section에 on 클래스 추가
window.addEventListener('load', () => {
  const currentSection = document.querySelector('section.on');
  // menuItem[currentSection.dataset.index - 1].classList.add('on');
});

// 메뉴 클릭 시 section 이동
menuItem.forEach((menu, index) => {
  menu.addEventListener('click', (event) => {
    event.preventDefault();
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});

// 스크롤 이벤트
window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset;
  
  // 현재 보여지는 section에 on 클래스 추가
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight - 100) {
      sections.forEach((section) => section.classList.remove('on'));
      menuItem.forEach((menu) => menu.classList.remove('on'));
      section.classList.add('on');
      menuItem[index].classList.add('on');
    }
  });

  // 마지막 section이 화면에 보일 때 menuItem 마지막 li에 on 클래스 추가
  const lastSection = sections[sections.length - 1];
  if (scrollPos >= lastSection.offsetTop + lastSection.offsetHeight - window.innerHeight) {
    menuItem.forEach((menu) => menu.classList.remove('on'));
    menuItem[menuItem.length - 1].classList.add('on');
  }
});


