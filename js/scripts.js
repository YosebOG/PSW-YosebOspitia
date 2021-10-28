// CALCULADORA APP

function sum(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
    let calRes = document.forCal.calRes.value;
    calRes = parseFloat(num1)+parseFloat(num2);
    document.forCal.calRes.value = calRes;
}

function res(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
    let calRes = document.forCal.calRes.value;
    calRes = parseFloat(num1)-parseFloat(num2);
    document.forCal.calRes.value = calRes;
}
function mul(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
    let calRes = document.forCal.calRes.value;
    calRes = parseFloat(num1)*parseFloat(num2);
    document.forCal.calRes.value = calRes;
}
function div(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
    let calRes = document.forCal.calRes.value;
    calRes = parseFloat(num1)/parseFloat(num2);
    document.forCal.calRes.value = calRes;
}
function por(){
    let num1 = document.forCal.calNum1.value;
    let num2 = document.forCal.calNum2.value;
    let calRes = document.forCal.calRes.value;
    calRes = parseFloat(num1)*(parseFloat(num2)/100);
    document.forCal.calRes.value = calRes;
}
// CONVERSOR APP
function calConversor(){
    let numEva = document.forCon.conNum.value;
    let dat1 = document.forCon.tipDat1.value;
    let dat2 = document.forCon.tipDat2.value;
    let conRes = document.forCon.conRes.value;
    conRes = (parseFloat(numEva)*parseFloat(dat2))/parseFloat(dat1);
    document.forCon.conRes.value = conRes;
}