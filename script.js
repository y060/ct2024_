document.addEventListener("DOMContentLoaded", () => {

    // 設定滑鼠跟隨
    var circle = document.getElementById("cursor_circle");
    window.addEventListener("mousemove", function(e){
        let x = e.pageX;
        let y = e.pageY;
        circle.style.left = x > (window.innerWidth-70)? window.innerWidth-50+"px": x-14+"px";
        circle.style.top = y-14+"px";
        console.log("x: ", x, "innerWidth: ", window.innerWidth)
        console.log( x > (window.innerWidth-70))
    })

})

// preloader
window.onload = () => {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    console.log("hi")
}


