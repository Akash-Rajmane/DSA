/*
You are playing a puzzle game , where you have to create a Number by appending 2 parts of that number array.

You have given a array of integers and a number X .

you have to create X by appending 2 integers in the array next to each other .

You have to return how many ways is possible to make X by the array elements



Example 1:

Input:

N = 4

numbers[] = {1, 212, 12, 12}

X = 1212

Output: 3

Explanation: We can obtain X=1212 by concatenating:

numbers[0] = 1 with numbers[1] = 212

numbers[2] = 12 with numbers[3] = 12

numbers[3] = 12 with numbers[2] = 12



Example 2:

Input: 

N = 3

numbers[] = {11, 11, 110}

X = 11011

Output: 2

Explanation: We can obtain X=11011 by concatenating:

numbers[2] = 110 with numbers[0] = 11

numbers[2] = 110 with numbers[1] = 11



Constraints:

1 ≤ N ≤ 5*10^4 

1 ≤ numbers[] ≤ 10^9

1 ≤ X ≤ 10^9 
*/

function countWaysToMakeX(N, numbers, X) {
    let count = 0;
    
    // Convert X to string for easier comparison
    X = X.toString();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i !== j) {
                // Concatenate two numbers and check if it equals X
                let concatenated = numbers[i].toString() + numbers[j].toString();
                if (concatenated === X) {
                    count++;
                }
            }
        }
    }

    return count;  
}   
    // Example 1
let N1 = 4;
let numbers1 = [1, 212, 12, 12];
let X1 = 1212;
console.log(countWaysToMakeX(N1, numbers1, X1)); // Output: 3

// Example 2
let N2 = 3;
let numbers2 = [11, 11, 110];
let X2 = 11011;
console.log(countWaysToMakeX(N2, numbers2, X2)); // Output: 2
