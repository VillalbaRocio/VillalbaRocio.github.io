const ERROR= document.getElementById("error");
const FLU= document.getElementById("flu");
const MAN= document.getElementById("man");
const INPUT= document.getElementById("peso");
const BOTON= document.getElementById("calcular");

BOTON.addEventListener("click", () => {
    let peso= INPUT.valueAsNumber;
    if (peso > 0 && peso <= 30){
    ERROR.style.display= "none";
    let res = holliday(peso);
    FLU.innerHTML = res + " cc/hr";
    FLU.style.display = "block";
    let man = res * 1.5;
    MAN.innerHTML = "m+m/2 " + man + " cc/hr";
    MAN.style.display = "block";
    }
    else if (peso > 30){
    let SuperficieCorporal = ( (peso * 4) + 7) / (peso + 90);
    FLU.innerHTML = SuperficieCorporal * 1500 + " m2";
    MAN.innerHTML = SuperficieCorporal * 2000 + " m2";
    FLU.style.display = "block";
    MAN.style.display = "block";
    }
    else{
    console.log("error");
    ERROR.style.display= "block";
    }    
});

//algoritmoderesolucion

function holliday(peso){
    let volumen;

    if (peso <= 10){
    volumen = peso * 100;
}
   else if (peso > 10 && peso <= 20){
    volumen = 1000 + (peso - 10) * 50;
}
    else {
    volumen = 1500 + (peso - 20) * 20;
}
return (volumen/24);

}

