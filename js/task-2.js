function getShippingMessage(country, price, deliveryFee) {

    const totalPrice = price + deliveryFee;  
    console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Australia", 80, 20);
getShippingMessage("Australia", 100, 20)