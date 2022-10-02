//Khai bao 1 doi tuong
var SinhVien = {
    name : "Nguyen Van A",
    Address : "Ha Noi",
    Sdt : "30984653409",
    Class : "CG5HJ6",
    Height : 180,
    Weight : 70,
    Show : function () {
        return this.name + "\t" + this.Address + "\t" + this.Class;
    },
    Danhgia : function () {
        if (this.Height >= 180) {
            return "Du tieu chuan";
        } else {
            return "Khong du tieu chuan";
        }
    },
    x : function(){
        return function () {
            console.log('END' + this.name);
        }
    }

}

console.log(SinhVien.name);
console.log(SinhVien["name"]);
console.log(SinhVien.Show());
console.log(SinhVien.Danhgia());
var a = SinhVien.x();
console.log(SinhVien.x());
console.log(a());