/*
You have given array of size n, you have to find the index of the smaller element to the right which must have largest distance from that element.
If the smaller element is not present print -1 for that number, return the array which contains these indices.
*/

function farthestSmallerEl(arr){
    let ans  = [];
    let n = arr.length;
    for(let i=0; i<n; i++){
        let index = -1;
        for(let j=i+1; j<n; j++){
            if(arr[i]>arr[j]){
                index = j;
            }
        }
        ans.push(index);
    }
    console.log(ans);
}

farthestSmallerEl([3, 1, 5, 2, 4]);//3 -1 4 -1 -1