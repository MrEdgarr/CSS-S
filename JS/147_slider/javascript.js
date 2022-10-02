

var nut = document.querySelectorAll('._nut ul li'),
    ul = document.querySelector('._slider ul');
    

    //TAO VONG LAP - TIM DEN CAC PHAN TU TRONG 1 MANG CHUA CAC NÚT
for (var i = 0; i < nut.length; i++) {
    // SỰ KIỆN CLICK CHUỘT
    nut[i].addEventListener('click', function () {

        // TẠO VÒNG LẬP ĐỂ XÓA CÁC CLASS active KHI CLICK CHUỘT VÀO PHẦN TƯ KHÁC
        for (var k = 0; k < nut.length; k++) {
            nut[k].classList.remove('active');
        }

        //THÊM CLASS ACTIVE KHI ĐÃ CHẠY VỌNG LẶP ĐỂ XÓA CÁC CLASS ACTIVE
        this.classList.add('active');

        var pt_hientai = document.querySelector('.active');

        /*
        TÌM DẾN PHÂN TỬ HIỆN TẠI (pt_hientai)
        previousElementSibling: THẺ ĐẰNG TRƯỚC NÓ
        MỖI LÀN LẶP SẼ TÌM ĐẾN PHÂN TỬ HIỆN TẠI VÀ TIẾN LÊN TRƯỚC NÓ
        */
        for (var vitri = 0; pt_hientai = pt_hientai.previousElementSibling; vitri++) {
        }


         
        for (let v = 0; v < nut.length; v++) {
             ul.classList.remove("so" + v);
        }
        ul.classList.add('so' + vitri);
    })
}