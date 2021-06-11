function max_path_matrix(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    let output = 0;
    for (let i=1; i<n; i++){
        for (let j=0; j<m; j++){
            if (j > 0 && j < m-1){
                matrix[i][j] += (Math.max(matrix[i-1][j],matrix[i-1][j-1],matrix[i-1][j+1]));
            }
            else if (j > 0){
                matrix[i][j] += (Math.max(matrix[i-1][j],matrix[i-1][j-1])); 
            }
            else{
                matrix[i][j] += (Math.max(matrix[i-1][j],matrix[i-1][j+1])); 
            }
        }
    }
    for (let j = 0; j< m; j++){
        output = Math.max(matrix[n-1][j],output);
    }
    return output;
}

let matrix = [
        [ 1,2,3],
        [ 9,8,7 ],
        [ 4,5,6 ]
];
console.log(max_path_matrix(matrix));