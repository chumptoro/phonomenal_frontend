function wesCalcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) {
      return tally
    };
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

function calcTotalPrice(shopping_bag) {
  var i = 0;
  var total_price = 0;
  //console.log(shopping_bag);
  for (i = 0; i < shopping_bag.length; i++) {
    //console.log(shopping_bag[i].price);
    total_price += parseFloat(shopping_bag[i].price*shopping_bag[i].quantity);
  }
  return (total_price.toFixed(2)).toString();
}

export default calcTotalPrice;
