function counter(){
    let count = 0
    return function(){
        return count++
    }
}
let c = counter() //C Stores a seprate value
console.log(c())
console.log(c())
console.log(c()) 

let d = counter() // D stores a seprate value
console.log(d())
console.log(d())
console.log(d())
