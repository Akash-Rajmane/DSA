/*
N distinct flags are placed on x- y plane. You need to rearrange the flags such that following conditions are satisfied

> All have same y coordinated
> Maximum distance between any two points should be N-1
> They should all be at different positions

For this rearrangement you can move a flag from (x, y) to (x+1, y) or (x-1, y) or (x, y+1) or (x, y-1). This operation can be performed any number of times for all the flag. Performing this operation costs 1 unit per operation.
Find the minimum number of times you need to apply the operation to satisfy the above conditions.

Note - At any point of time you cannot allow two flags to be at same position.

Input:
First line of input contains N
N lines follow each of which contains the coordinate of ith flag xi yi

Constraints:
1 <= N <= 100000
-1000000000 <= xi, yi <= 1000000000

Output:
Return a single integer which is the minimum number of operations required to perform the rearrangement

Example

Sample input 1:
2
1 0
2 1

Sample output 1:
1
Explaination1 - We can move flag 1 from (1, 0) to (1, 1)

Sample input 2:
3
1 1
2 2
3 3

Sample output 2:
2
Explaination1 - We can move flag 1 from (1, 1) to (1, 2) and flag 2 from (3, 3) to (3, 2)
*/

let flags = [
    [1,1],    
    [2,2],
    [5,20],
    [6,13] 
];

// let flags = [
//     [1,1],[4,1],[8,1],[12,1],[30,1]
// ]
  
function flagsRearrangement(flags){
    let n = flags.length;
    flags.sort((a,b)=>a[1]-b[1]);
    let mid = Math.floor((0+n-1)/2);
    let operations = 0;

    for(let i=0; i<n; i++){ 
        operations += Math.abs(flags[i][1] - flags[mid][1]);
        flags[i][1] = flags[mid][1];
    }

    flags.sort((a,b)=>a[0]-b[0]);

    for(let i=0; i<mid; i++){
        let distance = mid-i;
        let target = flags[mid][0]-distance;
        operations += target-flags[i][0];
    }

    for(let i=mid+1; i<n; i++){
        let distance = i-mid;
        let target = flags[mid][0]+distance;
        operations += flags[i][0]-target;  
    }

    console.log(operations);
}

flagsRearrangement(flags);
