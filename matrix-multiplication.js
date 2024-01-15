function multiply(arr1,arr2){
    let res = new Array(arr1.length);
    for (i = 0; i < arr1.length; i++){
        res[i] = new Array(arr2[0].length);
    }
    

    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2[0].length; j++){
            res[i][j] = 0;
            for(let k=0; k<arr1[0].length; k++){
                res[i][j] += arr1[i][k]*arr2[k][j];
            }
        }
    }
    console.log(res);
}

let arr1 = [[0,-1,2],[4,11,2]];
let arr2 = [[3,-1],[1,2],[6,1]];
multiply(arr1,arr2);

/*
row * column => row
m1*m2 x n1*n2 => m1*n2
number of rows = arr.length
number of cols = arr[0].length
*/