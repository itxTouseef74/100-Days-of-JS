function nume() {
    let a =Math.floor( Math.random())*(10-2)+3
    console.log(`Random vauw bwtween 1 and 10 is ${a}`)
}
nume();
// Integer Value between Two Numbers

let max=parseInt(prompt("Enter max no"));
let min=parseInt(prompt("Enter min no"));
let result= Math.floor(Math.random() * (max - min + 1)) + min;;
alert(`Random value between ${max} and ${min} is ${result}`)
