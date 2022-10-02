
//addEventListener event
document.addEventListener("DOMContentLoaded",function(){
    var x1 = document.getElementById('n1');
    console.log(x1);

    //Sự kiện click
    x1.onclick = function() {
        console.log(x1);
        x1.classList.toggle('down');
    }
},false)
