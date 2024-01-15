/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Input: height = [4,2,0,3,2,5]
Output: 9

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

function trap(height) {
    let leftMax = [];
    let rightMax = [];

    leftMax[0] = height[0];
    for(let i=1; i<height.length; i++){
        if(leftMax[i-1]<=height[i]){
            leftMax[i] = height[i];
        }else{
            leftMax[i] = leftMax[i-1];
        }
        // leftMax[i] = Math.max(leftMax[i-1],height[i]);
    } 
    
    rightMax[height.length-1] = height[height.length-1];
    for(let i=height.length-2; i>=0; i--){
        if(rightMax[i+1]<=height[i]){
            rightMax[i] = height[i];
        }else{
            rightMax[i] = rightMax[i+1];
        }
        // rightMax[i] = Math.max(rightMax[i+1],height[i]);
    } 
    
    let water = 0;
    for(let i=0; i<height.length; i++){
        water += Math.min(leftMax[i],rightMax[i]) - height[i];
    }
    
    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


function trap1(height) {
    let stack = [];
    let ans  = 0;

    for(let i=0; i<height.length; i++){
        while(stack.length>0 && height[stack[stack.length-1]]<=height[i]){
            let rMax = i;
            let curr = height[stack.pop()];
            if(stack.length===0){
                break;
            }
            let lMax = stack[stack.length-1];
            let width = rMax-lMax-1;
            ans += (Math.min(height[rMax],height[lMax])-curr)*width;
        }
        stack.push(i);
    }

    console.log(ans);
};
