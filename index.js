let so1 = Math.ceil(Math.random(1,100)*100);
let ketqua;
let dapandung= false;

while(!dapandung) {
    ketqua = prompt("nhap so: ", 0);
    console.log(ketqua);
    if (ketqua>so1)
    {
        console.log("số random nhỏ hơn kết quả");
    } else if(ketqua<so1) {
        console.log("số random lớn hơn kết quả");
    }else{
        console.log("chúc mừng");
        dapandung = true;
    }
}


