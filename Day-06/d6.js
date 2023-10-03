function secon_greatest_no(arr) {
    arr.sort(function (a,b) {
        return a -b ;
    })

//  getting the second lowest no 

let secondLowest=arr[1];
let reverseArray=arr.reverse();
let secondGreatest=reverseArray[1];
return [secondLowest , secondGreatest];

}

console.log(secon_greatest_no([1,2,3,4,5]))