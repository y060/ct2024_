
document.addEventListener("DOMContentLoaded", () => {
    setProgress();

    var table_checkboxes = progress_table.querySelectorAll("#progress_table input[type='checkbox']");
    console.log(table_checkboxes)
    table_checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", setProgress);
    })
})


function setProgress(){

    // 獲取量
    let sum = 0, progress = 0;
    var scores = document.getElementsByClassName("score");
    for(var i=0; i<scores.length; i++){
        var score = scores[i];
        let checkbox = score.previousElementSibling.querySelector("input[type='checkbox']");
        sum += parseInt(score.textContent);
        if(checkbox.checked){
            progress += parseInt(score.textContent);
        }
    }

    let progress_pie = document.getElementById("my_progress");
    var r = parseInt(progress_pie.getAttribute("r"));

    // 周長、減去量  // 參考：https://nikitahl.com/svg-circle-progress
    var circumference = 2 * Math.PI * r;
    var offset = circumference * (1 - progress/sum);

    // console.log("progress = ", progress, "sum = ", sum, "progress/sum = ", progress/sum)
    // console.log("circumference = ", circumference, "; offset = ", offset)

    progress_pie.setAttribute("stroke-dasharray", circumference.toString() + "px");
    progress_pie.setAttribute("stroke-dashoffset", offset.toString() + "px");

    let my_score = document.getElementById("my_score");
    let full_score = document.getElementById("full_score");
    my_score.innerHTML = progress.toString()
    full_score.innerHTML = "/" + sum.toString()

}
