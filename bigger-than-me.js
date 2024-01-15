/*
Given an array containing numbers.
For each element check how many numbers are greater than it.
You have to return an array.

Example 1:-
Input:-
Arr - [9,5,3, 2,1]

Output:-
[0,1,2,3,4]

Explanation:- 
there is no number greater than 9 therefore count =0
9 is greater than 5 therefore total count = 1
9,5 is greater than 3 therefore total count = 2
9,5,3 is greater than 2 therefore total count = 3
9,5,3,2 is greater than 1 therefore total count = 4


Example 2:-

Input:-
Arr- [10,12,6,4,16,1]

Output:-
[2,1,3,4,0,5]

Explanation:- 
16,12 is greater than 10 therefore total count = 2
16 is greater than 12 therefore total count = 1
16,12,10 is greater than 6 therefore total count = 3
16,12,10 ,6 is greater than 4 therefore total count = 4
there is no number greater than 16 therefore count =0
16,12,10 ,6 ,4 is greater than 1 therefore total count = 4

Constraints:
1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4

*/

function greatEl(nums) {
    
    let res = [];
    for(let i=0; i<nums.length; i++){
        let count = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[i]<nums[j]){
                count++;
            }
        }
        res.push(count);
    }
    console.log(res);
};

//O(n2)

function greatEl1(arr){
    function bSearch(arr,el){
        let l=0;
        let r=arr.length-1;
        let end = -1;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(arr[mid]<el){
                l = mid + 1;
            }else if(arr[mid]>el){
                r = mid - 1;
            }else{
                end =  mid;
                l = mid + 1;
            }
        }
        return end;
    }
    
    let sortedArr = [...arr].sort((a,b)=>a-b);
    let res = [];
    for(let num of arr){
        let index = bSearch(sortedArr,num);
        res.push(arr.length-index-1);
    }
    console.log(res);
}
//O(nlogn);
greatEl1([3,2,4,5,1,3]);


function greatEl2(arr){
    const sortedArr = [...arr].sort((a, b) => a - b); // Sort the input array

    const result = []; // Create an empty array to store the results
    const countMap = new Map(); // Create a Map to store the counts
  
    for (let i = 0; i < sortedArr.length; i++) {
      const currentElement = sortedArr[i];
      const count = arr.length-i-1; // Count is the arr length - index - 1 in the sorted array
  
      countMap.set(currentElement, count); // Store the count in the Map
    }
  
    for (const element of arr) {
      const count = countMap.get(element);
      result.push(count); // Push the count into the result array
    }

    console.log(result);
}
//O(nlogn);
greatEl2([3,2,4,5,1,3]);
