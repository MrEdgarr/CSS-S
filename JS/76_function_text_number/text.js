var x = "Hom, nay, troi, dep";

//Ham leghth: Độ dài biến
console.log(x.length);

//Ham indexOf: Kiểm tra phần tư có xuất hiện không
//Ham search: Kiểm tra phần tư có xuất hiện không
var vitri = x.indexOf('Hom');
var vitri1 = x.search('Hom');
//Neu khong tim thay thi tra ve -1
if (vitri != -1) {
    console.log("Ton tai");

//Ham replace: Thay thế 1 gia tri mới
    var x1 = x.replace('dep','xau');
    console.log(x1);
} else {
    console.log("Khong ton tai");
}

//Ham split: Đưa dữ liệu vào trong 1 mảng, đc ngăn cách nhau bằng dấu split('Dấu ngăn cách')
var arr = x.split(',');
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
