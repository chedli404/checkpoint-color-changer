document.addEventListener("DOMContentLoaded", function () {

    var colorbox = document.getElementById("color-box")
    var btn = document.getElementById("change-color-btn")
    


    function getRandomColor(event) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        colorbox.style.backgroundColor = bgColor
    }
    btn.addEventListener("click", getRandomColor)
})
