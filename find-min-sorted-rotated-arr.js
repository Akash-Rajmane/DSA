function findMin(arr){
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]<arr[r]){
            // The minimum element is in the left half
            r = mid;
        }else{
            // The minimum element is in the right half
            l = mid + 1;
        }
    }
    return arr[l];
}

console.log(findMin([4, 5, 6, 1, 2]));

var findMin = function(arr) {
    let l=0;
    let r=arr.length-1;
    let ans = Infinity;
    while(l<=r){
        let m = Math.floor((l+r)/2);
        if(arr[l]<=arr[m]){
            ans = Math.min(ans,arr[l]);
            l = m+1;
        }else{
            ans = Math.min(ans,arr[m]);
            r = m-1;
        }
    }
    return ans;
};