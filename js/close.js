let mark_btn = document.querySelector(".mark_btn")
let mark = document.querySelector(".mark")
let mark_img_src = document.querySelector(".mark_img_src")
let art = document.querySelectorAll(".art")
console.log(art);
mark_btn.onclick = function () {
    mark.style.opacity = 0
    setTimeout(function () {
        mark.style.display = 'none'
    },500)
}
let artImg = [
    './img/arts/00.jpg',
    './img/arts/02.jpeg',
    './img/arts/03.jpg',
    './img/arts/04.jpg',
    './img/arts/05.gif',
    './img/arts/06.png',
]

for(let i = 0; i < art.length; i++){
    art[i].onclick = function () {
        mark.style.display = 'flex'
        setTimeout(function () {
            mark.style.opacity = 1
        },200)
        mark_img_src.src = artImg[i]
    }
}
