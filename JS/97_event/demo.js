document.addEventListener("DOMContentLoaded",function(){
    var click = document.getElementById("nut1");
    var card = document.getElementsByClassName('card');
    // console.log(click);
    // console.log(card[0]);
    click.onclick = function(){
        card[0].classList.toggle('move');
    }
},false)