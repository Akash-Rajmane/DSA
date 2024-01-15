function sumOfOddLengthSubArr(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let str = "";
        for(let j=i; j<arr.length; j++){
            str += (" "+arr[j]);
            str = str.trim();
            //console.log(str) // subArrays
            // j-i+1 = subarray length 
            if((j-i+1)%2!==0){
               let subarr = str.split(" ").map(el=>parseInt(el));
               for(let k=0; k<subarr.length; k++){
                 sum += subarr[k]; 
               }
            }
        }
        
    }
console.log(sum);
}

sumOfOddLengthSubArr([10,11,12]);
