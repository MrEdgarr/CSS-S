//Vong lap for
for (let i = 0; i <=10; i++) {
    console.log(i);
}


//Su dung vong lap voi array
var arr = ['A','B','C','D','E'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for(var x in arr){
    console.log(arr[x]);
}

//Su dung trong 1 OBJECT
var SinhVien = {
    name : "Nguyen Van A",
    Address : "Ha Noi",
    Sdt : "30984653409",
    Class : "CG5HJ6",
    Height : 180,
    Weight : 70,
}

for(var x in SinhVien){
    console.log(SinhVien[x]);
}