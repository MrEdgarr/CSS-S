document.addEventListener('DOMContentLoaded',function(){    
    var nut = document.querySelectorAll('.nut ul li'),
        nuttrai = nut[0];
        nutphai = nut[1];
    var slides = document.querySelectorAll('.slides ul li');
    var vitrislideht = 2;
     
     
    chuyenslide = function(){ 
        vitrislideht = vitrislideht - 1;
        for(var i = 0 ; i < slides.length; i++){
            slides[i].classList.remove('hienlen');
            slides[i].classList.remove('hieuungra')
            slides[i].classList.remove('hieuungvao');
        }
        if(vitrislideht == 0){
            vitrislideht = slides.length - 1;
            slides[vitrislideht].classList.add('hienlen')
            slides[0].classList.add('hieuungra')
            slides[vitrislideht].classList.add('hieuungvao');
        }
        else
        {
        slides[vitrislideht].classList.add('hienlen');
        slides[vitrislideht+1].classList.add('hieuungra')
        slides[vitrislideht].classList.add('hieuungvao');
        }
    }
    chuyenslide2 = function(){
        var slideht = document.querySelector('.slides ul li.hienlen');
        var vitri = 0;
        for(var i = 0 ; slideht = slideht.previousElementSibling; vitri ++){
            // Vong lap nay se dung khi ma slideht = null
        }// Lay dc vi tri cua slide hien tai sau khi thuc hien vong lap for nay
        for(var i = 0 ; i < slides.length; i++){
            slides[i].classList.remove('hienlen');
            slides[i].classList.remove('hieuungra')
            slides[i].classList.remove('hieuungvao');
        }
        if(vitri == slides.length-1){
            vitri = 0;
            slides[vitri].classList.add('hienlen');
            slides[4].classList.add('hieuungra');
            slides[vitri].classList.add('hieuungvao');
     
        }
        else{
            slides[vitri + 1].classList.add
            ('hienlen');
            slides[vitri+1].classList.add('hieuungvao');
            slides[vitri].classList.add('hieuungra')
        }
     
    }
    nuttrai.addEventListener('click',chuyenslide);
    nutphai.addEventListener('click',chuyenslide2);
     
    },false)