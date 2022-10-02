var anhs = document.querySelectorAll('.cacAnh img'),
    nenDen = document.querySelector('.nenden'),
    nutDong = document.querySelector('.dongLai'),
    thongtinanh = document.querySelector('.thongtinanh'),
    khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li'),
    nphai = document.querySelector('.nphai'),
    ntrai = document.querySelector('.ntrai'),
    thutucuaActive = 0;

// console.log(khoiCacAnhLis);
// console.log(anh);

//Khi click nut dong
// nutDong.addEventListener('click', function () {
//     nenDen.classList.remove('ra');
//     thongtinanh.classList.remove('ra');
//     anhActive = document.querySelector('.khoiCacAnh ul li.active');
//     // console.log(anhActive);
//     anhActive.classList.remove('active');
// })

//Khi click nen den
nenDen.addEventListener('click', function () {
    nenDen.classList.remove('ra');
    thongtinanh.classList.remove('ra');
    anhActive = document.querySelector('.khoiCacAnh ul li.active');
    // console.log(anhActive);
    anhActive.classList.remove('active');
})


//Vong lap cho img
for (let i = 0; i < anhs.length; i++) {
    anhs[i].addEventListener('click', function () {
        //console.log(this); //kiem tra du lieu img dc click
        // console.log(nenDen);
        nenDen.classList.add('ra');
        thongtinanh.classList.add('ra');

        var anhDuocClick = this;
        // console.log(anhDuocClick.previousElementSibling);
        for (var chiso = 0; anhDuocClick = anhDuocClick.previousElementSibling; chiso++) {
        }
        // console.log(khoiCacAnhLis[chiso]);
        thutucuaActive = chiso;
        khoiCacAnhLis[chiso].classList.add('active');
    })
}


var hientai2 = thutucuaActive;
nphai.addEventListener('click', function () {
    // console.log(thutucuaActive);
    //Xac dinh phan tu tiep theo;
    // var thutuPhanTuTiepTheo = 0;
    var soluongAnh = khoiCacAnhLis.length;
    var phantuHientai = khoiCacAnhLis[hientai2];


    if (hientai2 < (soluongAnh - 1)) {
        hientai2 = hientai2 + 1;
    } else {
        hientai2 = 0;
    }

    var phantutieptheo = khoiCacAnhLis[hientai2];

    phantuHientai.classList.remove('active');
    phantutieptheo.classList.add('active');
})


ntrai.addEventListener('click', function () {
    // console.log(thutucuaActive);
    //Xac dinh phan tu tiep theo;
    // var thutuPhanTuTiepTheo = 0;
    var soluongAnh = khoiCacAnhLis.length;
    var phantuHientai = khoiCacAnhLis[hientai2];

    if (hientai2 > 0) {
        hientai2 = hientai2 - 1;
    } else {
        hientai2 = soluongAnh - 1;
    }

    var phantutieptheo = khoiCacAnhLis[hientai2];

    phantuHientai.classList.remove('active');
    phantutieptheo.classList.add('active');
})