function find_max_row(matrix){
    let stat_hash = {};
    let row = matrix.length;
    let col = matrix[0].length;
    let count;
    let max_row = 0;
    let max_count = 0;
    for (let i=0; i < row; i++){
        count = 0;
        for(let j=0; j < col; j++){
            if (matrix[i][j] === 1){
                count += 1;
            }
        }
        max_count = Math.max(max_count,count);
        if(max_count){
            stat_hash[i] = count;
        }
    }
    return stat_hash;
}

let matrix = [
        [0,1,1,1],
        [0,0,1,1],
        [1,1,1,1],
        [0,0,0,0]
    ];
console.log(find_max_row(matrix));