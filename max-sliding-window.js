function maxSlidingWindow(nums, k){
    let q = [];
    let ans = [];

    for(let i=0; i<k; i++){
        q.push(nums[i]);
    }

    ans.push(Math.max(...q));

    for(let i=k; i<nums.length; i++){
        q.shift();
        q.push(nums[i]);
        ans.push(Math.max(...q));
    }
    
    return ans;
};

//O(n*k);

function maxSlidingWindow1(nums,k){
    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the front of the deque that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back of the deque that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element's index to the deque
        deque.push(i);

        // If we've processed at least k elements, add the maximum to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}