/*
array contains 2n+1 elements out of which n elemnts have exactly 1 duplicate present in the array. 
Find the non duplicate element in the array.  
*/

function findNonDuplicate(arr){
    let res = arr[0];
    for(let i=1; i<arr.length; i++){
       res = res ^ arr[i];     
    }
    console.log(res);
}

findNonDuplicate([1,2,3,1,2,4,3]);


// A^A = 0;
// A^0 = A;
// A1^A2^A1 = A1^A1^A2 Commutative
// 101^110 = 011 If diiferent bits then result is set bit.  

function findNonDuplicate1(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
         if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
         }else{
            map.set(arr[i],1);
         }
    }
    
    for(let [k,v] of map){
        if(v===1){
            console.log(k);
        }
    }
    
}

findNonDuplicate1([1,2,3,1,2,4,3]);