document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";

});

document.getElementById("growTallBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("growWideBtn").addEventListener("click", function(){

    document.getElementById("box").style.width = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("redBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "red";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "50%";

});