/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
 

Constraints:

1 <= nums.length <= 104
-109 <= nums[i] <= 109

*/

var nextGreaterElements = function(nums) {
    if(nums.length===1){
       return [-1];
   }
   
   let stack = [];
   let result = [];

   for(let i=nums.length-1; i>=0; i--) { // Filling elements into stack
       stack.push(nums[i]);
   }

   for (let i=nums.length-1; i>=0; i--) {
       while( stack.length>0 && nums[i] >= stack[stack.length-1]){
           stack.pop();
       }
       
       if(stack.length===0){
           result[i] = -1;
       } else {
           result[i] = stack[stack.length-1];
       }
       
       stack.push(nums[i]);
   }
   

   return result;
};