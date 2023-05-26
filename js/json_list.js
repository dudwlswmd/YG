

fetch('../json/concert.json')
     .then(response => response.json())//json을 스크립트로 활용할수있게 만든다
     .then(soccer => {
          soccer.concert.forEach((elLi)=>{
               const { img, Dday, data, content  } = elLi;
               const ul = document.querySelector('.swiper-wrapper.list_bu');
               const newLi = document.createElement('li');
               newLi.classList.add('swiper-slide');
               newLi.innerHTML=
               `
               <li class="swiper-slide my-div" data-img="${img}">
                    <a href="#">
                         <p>${Dday}</p>
                         <dl>
                              <dt>${data}</dt>
                              <dd>${content}</dd>
                         </dl>
                    </a>
               </li>
               `;
               ul.append(newLi)
          });
          concertList.update();
}).catch(error => console.error(error));