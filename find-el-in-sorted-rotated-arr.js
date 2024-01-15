function findEl(arr,target){
    let l=0;
    let r=arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        
        if(arr[mid]===target){
            return mid;
        }
        
        if(arr[l]<=arr[mid]){
            if(arr[l]<=target && target<arr[mid]){
                r = mid-1;
            }else{
                l = mid+1;
            }
        }else{
            if(arr[r]>=target && target>arr[mid]){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
    }
    return -1;
}

console.log(findEl([4,5,6,1,2,3],4));