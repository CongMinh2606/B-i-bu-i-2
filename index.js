let so1 = (Math.ceil(Math.random(1,100)*100));
let ketqua;
let dapandung= false;

while(!dapandung) {
    ketqua = prompt("nhap so: ");
    if (ketqua>so1)
    {
        alert("số random nhỏ hơn kết quả");
    } else if(ketqua<so1) {
        alert("số random lớn hơn kết quả");
    }else{
        alert("chúc mừng");
        dapandung = true;
    }
}



