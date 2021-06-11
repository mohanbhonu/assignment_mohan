function majority_elements_existance(input){
    let stat_hash = {};
    let uniq_list = [];
    for (let value of input){
        if (uniq_list.includes (value)){
            continue;
        }
        else{
            uniq_list.push(value);
        }
    }
    for (let value of uniq_list){
        let counter = 1;
        for (let value1 of input){
            if (value === value1){
                stat_hash[value] = counter;
                counter += 1;
            }
        }
    }
    let max_occur = parseInt(input.length / 2);
    let max_key = 0;
    let max_value = 0;
    let occurance_list = Object.entries(stat_hash).map((item) => {
        if (item[1] > max_occur){
            max_key = (Math.max(max_key,item[1]));
            if (max_key){
                max_value = item[0];
            }
        }
    });
    if(max_value === 0){
        return "No Majority Element";
    }
    return max_value;
}
let Input_TestCase = [
    [3, 3, 4, 2, 4, 4, 2, 4, 4],
    [3, 3, 4, 2, 4, 4, 2, 4]
];
for (let test_case of Input_TestCase){
    console.log(majority_elements_existance(test_case));
}