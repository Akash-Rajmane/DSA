/*
Given a string A denoting a stream of lowercase alphabets. You have to make new string B.

B is formed such that we have to find first non-repeating character each time a character is inserted to the stream and append it at the end to B. If no non-repeating character is found then append '#' at the end of B.



Problem Constraints
1 <= length of the string <= 100000



Input Format
The only argument given is string A.



Output Format
Return a string B after processing the stream of lowercase alphabets A.



Example Input
Input 1:

 A = "abadbc"
Input 2:

 A = "abcabc"


Example Output
Output 1:

 "aabbdd"
Output 2:

 "aaabc#"


Example Explanation
Explanation 1:

    "a"      -   first non repeating character 'a'
    "ab"     -   first non repeating character 'a'
    "aba"    -   first non repeating character 'b'
    "abad"   -   first non repeating character 'b'
    "abadb"  -   first non repeating character 'd'
    "abadbc" -   first non repeating character 'd'
Explanation 2:

    "a"      -   first non repeating character 'a'
    "ab"     -   first non repeating character 'a'
    "abc"    -   first non repeating character 'a'
    "abca"   -   first non repeating character 'b'
    "abcab"  -   first non repeating character 'c'
    "abcabc" -   no non repeating character so '#'
*/

function solve(A){
   const charCount = new Map(); // To store character frequencies
   const queue = []; // To maintain the order of characters
   const B = [];

   
   for (const char of A) {
   // Update character count
       if (charCount.has(char)) {
           charCount.set(char, charCount.get(char) + 1);
       } else {
           charCount.set(char, 1);
       }

   // Add the character to the queue
       queue.push(char);

   // Find the first non-repeating character in the queue
       while (queue.length > 0 && charCount.get(queue[0]) > 1) {
           queue.shift(); // Remove the repeated character from the queue
       }

   // Append the result to B based on the current state of the queue
       if (queue.length > 0) {
           B.push(queue[0]); // The first non-repeating character
       } else {
           B.push('#'); // No non-repeating character, so append '#'
       }
   }
   return B.join(''); // Convert the result array to a string
}
