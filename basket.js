let f1 =  (basket,prices)=> {
    let totalcost = 0;
    for(let item in basket){
        if(prices[item] !=  undefined){
            totalcost  +=basket[item] * prices[item];
        }
    }
    return totalcost;
}
basket = {apple:1,oranges:3,grapes:5};
price={apple:2.50,oranges: 3.50,grapes:5.0,tea:10,milk:50};
alert(f1(basket,price));
