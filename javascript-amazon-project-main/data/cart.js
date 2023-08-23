export let cart = [{
  productID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
},
{
  productID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1,
}];


export function addToCart(productID){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productID === cartItem.productID){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += 1;
  } else{
    cart.push({
      productID: productID,
      quantity: 1
    });
  }
  console.log(cart);
}

export function removeFromCart(productID){
  const newCart = [];
  // console.log(cart);
  cart.forEach((cartItem)=>{
    if (cartItem.productID !== productID){
      newCart.push(cartItem);    
    }
  });
  cart = newCart;
  
}