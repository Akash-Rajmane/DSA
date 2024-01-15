/*
You have given a string , You have to add characters at start of string to make it a palindrome .
return the minimum number of characters required to add to make it a palindrome.

Example 1:

Input:
str = "abcd"

Output: 3
Explanation: Inserted character marked with bold characters in dcbabcd

Example 2:

Input:
str = "aa"

Output: 0
Explanation:"aa" is already a palindrome.

*/


function minCharForPalindrome(str){
    function isPalindrome(s){
        return s === s.split("").reverse().join("");
    }

    let count = 0;
    for(let i=0; i<str.length; i++){
        let prefix = str.slice(0,str.length-i);
        if(isPalindrome(prefix)){
            return count;
        }else{
            count++;
        }
    }
    return count;
}

console.log(minCharForPalindrome("abbas"));