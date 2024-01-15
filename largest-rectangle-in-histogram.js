/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, 
return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Input: heights = [2,4]
Output: 4

Constraints:
1 <= heights.length <= 105
0 <= heights[i] <= 104
*/


function maxRectArea(heights) {
    const n = heights.length;
    let lMin = new Array(n);
    let rMin = new Array(n);

    // Initialize rMin for the last element
    rMin[n - 1] = n;

    // Calculate rMin for each element
    for (let i = n - 2; i >= 0; i--) {
        let j = i + 1;
        while (j < n && heights[i] <= heights[j]) {
            j++;
        }
        rMin[i] = j;
    }

    // Initialize lMin for the first element
    lMin[0] = -1;

    // Calculate lMin for each element
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        while (j >= 0 && heights[i] <= heights[j]) {
            j--;
        }
        lMin[i] = j;
    }

    let maxArea = 0;

    // Calculate the maximum area using lMin and rMin
    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, (rMin[i] - lMin[i] - 1) * heights[i]);
    }

    
    console.log(maxArea); 
};
//O(n2)

maxRectArea([1,2,2,3]);