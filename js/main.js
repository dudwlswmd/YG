









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


