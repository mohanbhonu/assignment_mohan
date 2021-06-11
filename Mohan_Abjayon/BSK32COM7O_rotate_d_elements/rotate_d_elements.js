function rotate(arr,d,n){
    let lastPart = [];
    let firstPart = [];
    for (let val in arr){
        if (val >= d ){
            lastPart.push(arr[val]);
        }
        else{
            firstPart.push(arr[val]);
        }
    }
    let output = lastPart.concat(firstPart);
    return output;
}

arr = [1,2,3,4,5];
d = 2;
n = 5;
console.log(rotate(arr,d,n))