document.getElementById("deposit-btn").addEventListener("click",function(){
    const amount = getInputValue("deposit-input")
    if(amount > 0){
        updateTotal("deposit-total",amount);
        updateBalance(amount,true);
    }
 

})
// widthdraw-btn 
document.getElementById("widthdraw-btn").addEventListener('click',function(){
    const amount = getInputValue("widthdraw-input")
    const balance =getInnerTextvalue("balance-total")
   if(amount > 0 && amount <= balance){
    updateTotal('widthraw-total',amount);
    updateBalance(amount,false);
   }
})

function getInputValue(inputId){
    const inputFiled = document.getElementById(inputId);
    const inputFiledText = inputFiled.value;
    const inputValue = parseFloat(inputFiledText);
    inputFiled.value='';
    return inputValue; 
}
function updateTotal(fieldId,amounts){
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextvalue (fieldId)
    const newTotal = previousTotal + amounts;
    document.getElementById(fieldId).innerText = newTotal;
}
function updateBalance(amounts,isAdding){
    /* const balanceTag = document.getElementById("balance-total");
    const balanceText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceText); */
    const previousBalance = getInnerTextvalue ("balance-total");
    let newBalance;
    if( isAdding == true){
        newBalance = previousBalance + amounts;
    }else{
        newBalance = previousBalance - amounts;
    }
    
    document.getElementById("balance-total").innerText = newBalance;
}
// common input value
function getInnerTextvalue (fieldId){
   const filedTag = document.getElementById(fieldId)
   const filedValueInnerText = filedTag.innerText;
   const value = parseFloat(filedValueInnerText);
   return value;

}