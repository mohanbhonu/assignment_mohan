function triplet_sum(arr1,arr2,arr3){
    let len = arr1.length;
    let mixed_array = [];
    mixed_array.push(arr1);
    mixed_array.push(arr2);
    mixed_array.push(arr3);
    let result = [];
    for (let i = 0; i < 3; i++){
        let max = Math.max.apply(Math, mixed_array[i]);
        let min = Math.min.apply(Math, mixed_array[i]);
        result.push(max-min);
    }
    result = result.sort();
    //result = result.reverse();
    let output = "";
    for (let element of result){
        output += element;
        output += " ";
    }
    return output;
}


let arr1 = [15, 12, 18, 9];
let arr2 = [10, 17, 13, 8];
let arr3 = [14, 16, 11, 5];
console.log(triplet_sum(arr1,arr2,arr3));