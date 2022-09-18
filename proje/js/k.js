const intro = document.querySelector('.intro');
const TextLogo = document.querySelectorAll('.logo');


window.addEventListener('load', function(){

    setTimeout(()=>{
        TextLogo.forEach((Logo,inx)=>{
            setTimeout(()=>{
                Logo.classList.add('active')
            },(inx+1)*400)
        }) 
    })

    setTimeout(()=>{
       TextLogo.forEach((Logo, inx) => {
           setTimeout(()=>{
               Logo.classList.remove('active');
               Logo.classList.add('fade');
           },(inx+1)*50)
       }) 
    }, 2000)

    setTimeout(()=>{
        intro.style.top = '-100vh'
    },2300)
})
const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkboxes)
checkboxes()
function checkboxes(){
    const windowheight=(window.innerHeight/100)*100
    boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top
    if(boxTop<windowheight){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }

    })
}
const search = document.querySelector('.search');
const btn1 = document.querySelector('.btn');
const input = document.querySelector('input');

btn1.addEventListener('click', function() {
    search.classList.toggle('active');
    input.focus()
})
let items = document.querySelector('.slider-item');
let nextSlide = document.querySelector('.right-slide');
let prevSlide = document.querySelector('.left-slide');
let totalItems = items.length;
let index = 0;
console.log(items)

nextSlide.onclick = function(){
    next('next');
}

prevSlide.onclick = function(){
    next('prev');
}
const searchBtn = document.querySelector(".btn"),
  searchBox = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  searchBox.classList.searchBox("active");
});

function next(direction){
    if(direction == 'next'){
        index++;
        if(index == totalItems){
            index = 0;
        }
        console.log(index)
    }else{
      if(index == 0){
          index = totalItems-1
          console.log(index)
      } else{
          index--
          console.log(index)
      }
    }
    
    for(let i =0; i < items.length; i++){
        items[i].classList.remove('active');
    }
    items[index].classList.add('active')

}
(function(){
    document.addEventListener('keyup',  (event)=>{
        if(event.target.matches('.count-chars')){
            const value = event.target.value;
            const valueLength = event.target.value.length;
            const maxChars = event.target.getAttribute('data-max-chars');
            const remaining = maxChars - valueLength;
            if(valueLength > maxChars){
                event.target.value = value.substr(0, maxChars);
                return;
            }
            event.target.nextElementSibling.innerHTML = remaining + " کارکتر باقی مانده"
        }
    })
})();

const allBox = document.querySelector('.content').children;
const boxWidth = allBox[0].querySelector('.inner').offsetWidth;
const boxHeight = allBox[0].querySelector('.inner').offsetHeight;


const div = document.createElement('div');
// div.style.position = "absolute";
div.style.width = boxWidth + "px";
div.style.height = boxHeight + "px";
div.style.backgroundColor = "#7d21b3";
div.style.transition = "all 5.s ease"
div.style.left = allBox[0].querySelector('.inner').offsetLeft + "px";
div.style.top = allBox[0].querySelector('.inner').offsetTop + "px";
document.querySelector('.grid-box').appendChild(div);


for(let i =0;i<allBox.length;i++){
    allBox[i].addEventListener('click',function(){
        const x = this.offsetLeft;
        const y = this.offsetTop;
        div.style.left = x + "px";
        div.style.top = y + "px";
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        div.style.width = width + "px";
        div.style.height = height + "px";
    })
}
const open = document.querySelector('#open');
const modalContainer = document.querySelector('.modal_container');
const close = document.querySelector('#close');

open.addEventListener('click', function(){
    modalContainer.classList.add('show');
})

close.addEventListener('click', function(){
    modalContainer.classList.remove('show')
})
const text = ['طراحی وب','برنامه نویس وب','مدرس تاپ لرن'];

let count = 0;
let indexx = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.type').textContent = letter;
    console.log(index)
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 200)

})()

const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');


function stopPlayer(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    // myVideo.src = file
    videoPlayer.style.display = 'block'
}

