function disocuntCalculator(discount){
    return function(price){
        return price - (price*(discount/100 ))
    }
}

let discounter = disocuntCalculator(10)
console.log(discounter(200));

