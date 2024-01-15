/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.



Try to Solve in time Complexity 0(n*k).



You Dont need to return an Array. Modify array in place. 



 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3

Output: [5,6,7,1,2,3,4]

Explanation:

rotate 1 steps to the right: [7,1,2,3,4,5,6]

rotate 2 steps to the right: [6,7,1,2,3,4,5]

rotate 3 steps to the right: [5,6,7,1,2,3,4]





Example 2:

Input: nums = [-1,-100,3,99], k = 2

Output: [3,99,-1,-100]

Explanation:

rotate 1 steps to the right: [99,-1,-100,3]

rotate 2 steps to the right: [3,99,-1,-100] 

*/
function rotateArr(arr,k){
    
    for(let i=0; i<k; i++){
        let val = arr[0];
        for(let j=1; j<arr.length; j++){
            let temp = val;
            val = arr[j];
            arr[j] = temp;
        }
        arr[0] = val;
    }
   console.log(arr); 
}
    

rotateArr([1,2,3,4,5],3);

