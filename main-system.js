var charNumber = document.getElementsByClassName("number")
var charOperator = document.getElementsByClassName("operator")

for (let i = 0; i < charNumber.length; i++) {
    charNumber[i].addEventListener("click",function(){angkaProses(charNumber[i].innerHTML)});
}
for (let i = 0; i < charOperator.length; i++) {
    charOperator[i].addEventListener("click",function(){operatorProses(charOperator[i].innerHTML)});
}

let penampung = ''
let angka = [0,0]
let op = ''
function angkaProses(input){
    if (penampung.length>7){
        document.getElementById("hasil").style.fontSize = "20px";
    }else document.getElementById("hasil").style.fontSize = "40px";

    if (penampung[0] === '0' && input === '0' && penampung[1] !== '.') return 0
    if (penampung === '') penampung = input;
    else penampung += input;
    document.getElementById("hasil").innerHTML = penampung;
}
function operatorProses(input){
    document.getElementById("hasil").style.fontSize = "40px";
    document.getElementById("hasil").innerHTML = input;
    if (!angka[0]) angka[0] = Number(penampung)
    console.log(penampung)
    if (input === '='){
        
        angka[1] = Number(penampung)
        let result = 0
        switch (op) {
            case '+': result = angka[0]+angka[1]; break;
            case '-': result = angka[0]-angka[1]; break;
            case '/': result = angka[0]/angka[1]; break;
            case 'x': result = angka[0]*angka[1]; break;
            case '%': result = angka[0]%angka[1]; break;
            default:
                result ='err'
            break;
        }
    if (result>1e7) document.getElementById("hasil").style.fontSize = "20px";
        document.getElementById("hasil").innerHTML = result;
        console.log(angka[0], angka[1],result)
        angka = [0,0]
        op = ''
    }
    if (input === 'AC'){
        document.getElementById("hasil").innerHTML = 0;
        angka = [0,0]
        op = ''    
    }else{
        op = input
    }
    
    if (op === '+/-'){
        if (penampung[0] === '-') penampung = penampung.substring(1)
        else penampung = '-' + penampung
        document.getElementById("hasil").innerHTML = penampung;
        angka[0] = 0
    }else penampung = ''

}