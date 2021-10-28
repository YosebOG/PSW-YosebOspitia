// CALCULADORA APP

function sum(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
}

// CONVERSOR APP
function calConversor(){
    let numEva = document.forCon.conNum.value;
    let dat1 = document.forCon.tipDat1.value;
    let dat2 = document.forCon.tipDat2.value;
    let result = document.forCon.conRes.value;
    result = (parseFloat(numEva)*parseFloat(dat2))/parseFloat(dat1);
    document.forCon.conRes.value = result;
}