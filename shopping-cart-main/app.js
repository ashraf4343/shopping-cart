function updateProductNumber(product,price,isIncreasing){
    let productInput = document.getElementById(product+'-number');
    let productNumber= productInput.value;
    if(isIncreasing==true){
        productInput.value=parseInt(productNumber)+1;
    
      }
      else if(productNumber>0){

        productInput.value=parseInt(productNumber)-1;
      }
    //   update  total
    let productTotal = document.getElementById(product+'-total');
    productTotal.innerText=productInput.value*price;

  
}
function getInputValue(product){
    let productInput = document.getElementById(product+'-number');
    let productNumber=productInput.value;
    return productNumber;
}
function calculateTotal(){
   
    let phoneTotal = getInputValue('phone')*1229;

    let caseTotal = getInputValue('case')*59;
    let subTotal = phoneTotal+caseTotal;
    let tax =(subTotal*10)/100;
    let totalPrice = subTotal+tax;
    // //update on html
    document.getElementById('sub-total').innerText= subTotal;
    document.getElementById('tax-amount').innerText= tax;
    document.getElementById('total-price').innerText= totalPrice;


}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductNumber('phone',1229,true);
   calculateTotal();
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1229,false);
    calculateTotal();
 })
// handle case increase decrease events

document.getElementById('case-plus').addEventListener('click', function(){
  updateProductNumber('case',59,true);
  calculateTotal();
 

});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',59,false);
    calculateTotal();
  });



//   document.getElementById('phone-plus').addEventListener('click', function(){
//     updateProductNumber(true);
//   });

//   document.getElementById('phone-minus').addEventListener('click', function(){
//     updateProductNumber(false);
//   });