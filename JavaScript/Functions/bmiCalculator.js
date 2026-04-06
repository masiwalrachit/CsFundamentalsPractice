function bmi(weight,height){
    let bm = weight/(height*height)
    return bm 
}

console.log(bmi(74,1.83).toFixed(1));