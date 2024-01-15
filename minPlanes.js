/*
Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly. 

You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport. 

You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1

Example: 

Array = [2,1,2,3,1]

In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. The minimum number of planes required in this case is two 2 → 2→ 1. 

Example 2:

Array = [1,6,3,4,5,0,0,0,6]

In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6
*/

function minPlanes(fuelArr){
    let n = fuelArr.length;

    // The number of planes if n=1 & first element is not equal to 0 
    if (n === 1 & fuelArr[0]!==0){
        return 1;
    }
 
    // Return -1 if fuel in first plane is 0
    if (fuelArr[0] == 0)
        return -1;

    //maxDistance that can be travelled.
    let maxDistance = fuelArr[0];

    // stores the number of steps we can still take
    let step = fuelArr[0];

    // stores the number of planes necessary to reach the end of array.
    let planes = 1;


    // Start traversing fuelArray
    let i = 1;
    for (i = 1; i < n; i++) {
        // Check if we have reached the end of the Array
        if (i >= n - 1){
            return planes;
        }

        // updating maxDistance
        maxDistance = Math.max(maxDistance, i + fuelArr[i]);

        // we use a step to get to the current index
        step--;

        // If no further steps left
        if (step == 0) {
            // we must have used a planes
            planes++;

            // Check if the current index/position or lesser index
            // is the maximum reach point from the previous indexes
            if (i >= maxDistance)
                return -1;

            // re-initialize the steps to the amount
            // of steps to reach maxDistance from position i.
            step = maxDistance - i;
        }

    }

    return -1;
}


 let ans = minPlanes([0]);
 console.log(ans);