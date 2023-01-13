window.onload = function () {
    let top = document.querySelector(".top")
    let topT = document.documentElement.scrollTop
    if(topT == 0){
        top.style.display = 'none'
    }else {
        top.style.display = 'block'
    }
}
window.onscroll = function () {
    let top = document.querySelector(".top")
    let topT = document.documentElement.scrollTop
    if(topT == 0){
        top.style.display = 'none'
    }else {
        top.style.display = 'block'
    }
}