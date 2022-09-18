const left = document.querySelector(".left")
const right =document.querySelector(".right")
const cont =document.querySelector(".container")

left.addEventListener('mouseenter',()=>cont.classList.add('.hover-left'))
left.addEventListener('mouseenter',()=>cont.classList.remove('.hover-left'))

right.addEventListener('mouseenter',()=>cont.classList.add('.hover-right'))
right.addEventListener('mouseenter',()=>cont.classList.remove('.hover-right'))