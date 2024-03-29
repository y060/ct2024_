document.addEventListener("DOMContentLoaded", () => {

    // 設定滑鼠跟隨
    var circle = document.getElementById("cursor_circle");
    window.addEventListener("mousemove", function(e){
        let x = e.clientX;
        let y = e.clientY;
        circle.style.left = x-14+"px";
        circle.style.top = y-14+"px";
    })

})

// preloader
window.onload = () => {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    console.log("hi")
}


