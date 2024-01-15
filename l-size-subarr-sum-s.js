/*
Consider the integer sequence A = {1, 2, 3, ...., N} i.e. the first N natural numbers in order.
You are now given two integers, L and S. Determine whether there exists a subarray with length L and sum S after removing at most one element from A.
A subarray of an array is a non-empty sequence obtained by removing zero or more elements from the front of the array, and zero or more elements from the back of the array.

Input
The first line contains a single integer T, the number of test cases.
T lines follow. Each line describes a single test case and contains three integers: N, L, and S.



Constraints:
1 <= T <= 100
2 <= N <= 10^9
1 <= L <= N-1
1 <= S <= 10^18 (Note that S will not fit in a 32-bit integer)

Output
For each test case, print "YES" (without quotes) if a required subarray can exist, and "NO" (without quotes) otherwise.

Example

Sample Input:
3
5 3 11
5 3 5
5 3 6

Sample Output:
YES
NO
YES

Sample Explanation:
For the first test case, we can remove 3 from A to obtain A = {1, 2, 4, 5} where {2, 4, 5} is a required subarray of size 3 and sum 11.


Input 2:
3
5 3 11
9 5 13
0 4 1

Output 2:
YES
NO
NO

*/

// Function the return sum of first N natural numbers
function findSum(n) {
    return n * (n + 1) / 2;
}
 
// Function to check if the sum exists
function isPossible(n, l, s) {
    // Minimum sum will be sum of first l numbers
    let minimumSum = findSum(l);
    // Maximum sum will be sum of last l numbers
    let maximumSum = findSum(n) - findSum(n - l);
    // Checking if the given sum is not falling within the
    // range then return false else return true
    if (s < minimumSum || s > maximumSum){
        console.log("YES");
        return;
    }
    console.log("NO");
}

isPossible(5,3,11);
isPossible(9,5,13);