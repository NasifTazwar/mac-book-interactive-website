
/* MEMORY */
function memoryConfig(amount){
    const memoryCost = document.getElementById('extra-memory-cost');
    const storageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('extra-delivery-cost');
    const totalPrice = document.getElementById('total-price');
    const footerTotal = document.getElementById('footer-total');

    const memoryCostNumber = parseInt(memoryCost.innerText);
    const storageCostNumber = parseInt(storageCost.innerText);
    const deliveryCostNumber = parseInt(deliveryCharge.innerText);
    const totalPriceNumber = parseInt(totalPrice.innerText);
    const footerTotalNumber = parseInt(footerTotal.innerText);


    memoryCost.innerText = amount;

    const newTotalPrice = 1299 + amount + storageCostNumber + deliveryCostNumber ;
    totalPrice.innerText = newTotalPrice;
    footerTotal.innerText = newTotalPrice; 
}

document.getElementById('8gb-memory-button').addEventListener('click',function(){
    memoryConfig(0);
    
})
document.getElementById('16gb-memory-button').addEventListener('click',function(){
    memoryConfig(180);
})



/* Storage */
function storageConfig(amount){
    const memoryCost = document.getElementById('extra-memory-cost');
    const storageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('extra-delivery-cost');
    const totalPrice = document.getElementById('total-price'); 
    const footerTotal = document.getElementById('footer-total');

    const memoryCostNumber = parseInt(memoryCost.innerText);
    const storageCostNumber = parseInt(storageCost.innerText);
    const deliveryCostNumber = parseInt(deliveryCharge.innerText);
    const totalPriceNumber = parseInt(totalPrice.innerText);
    const footerTotalNumber = parseInt(footerTotal.innerText);

    storageCost.innerText = amount;

    const newTotalPrice = 1299 + memoryCostNumber + amount + deliveryCostNumber ;
    totalPrice.innerText = newTotalPrice;
    footerTotal.innerText = newTotalPrice; 
}
document.getElementById('256gb-storage-button').addEventListener('click',function(){
    storageConfig(0);
})
document.getElementById('512gb-storage-button').addEventListener('click',function(){
    storageConfig(100);
})
document.getElementById('1tb-storage-button').addEventListener('click',function(){
    storageConfig(180);
})

/* DELIVERY */ 
function deliveryCost(amount){
    const memoryCost = document.getElementById('extra-memory-cost');
    const storageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('extra-delivery-cost');
    const totalPrice = document.getElementById('total-price'); 
    const footerTotal = document.getElementById('footer-total');

    const memoryCostNumber = parseInt(memoryCost.innerText);
    const storageCostNumber = parseInt(storageCost.innerText);
    const deliveryCostNumber = parseInt(deliveryCharge.innerText);
    const totalPriceNumber = parseInt(totalPrice.innerText);
    const footerTotalNumber = parseInt(footerTotal.innerText);

    deliveryCharge.innerText = amount;

    const newTotalPrice = 1299 + memoryCostNumber + storageCostNumber + amount ;
    totalPrice.innerText = newTotalPrice;
    footerTotal.innerText = newTotalPrice; 
}
document.getElementById('free-delivery-button').addEventListener('click',function(){
    deliveryCost(0);
})
document.getElementById('not-free-delivery-button').addEventListener('click',function(){
    deliveryCost(20);
})

/* ADD PROMO CODE */
function checkPromoCode(lowerCaseText){
    if(lowerCaseText == 'stevekaku'){
        const totalPrice = document.getElementById('total-price');
        const totalPriceNumber = parseInt(totalPrice.innerText);

        const discountedPrice =totalPriceNumber-(totalPriceNumber*0.2);

        const footerTotal = document.getElementById('footer-total');
        footerTotal.innerText = discountedPrice;

    }
    else{
        alert("Invalid Coupon or Promo Code!");
    }
}
document.getElementById('apply-button').addEventListener('click',function(){
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeInputText = promoCodeInput.value;
    const promoCodeInputTextLower = promoCodeInputText.toLowerCase();
    
    checkPromoCode(promoCodeInputTextLower);
    
    promoCodeInput.value ='';
})











