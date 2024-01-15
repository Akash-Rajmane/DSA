/*
They say friendship is greater than love. Why not play the famous game "FLAMES".
The rules are super simple. Given two strings (all lowercase), remove all the letters that are common to both the strings from both the strings. You cannot erase a character in first string whichever corresponding same character in other string not exist.
For example, in the case
String 1: saumya
String 2: ansh
You can remove only 1 'a' and 1 's' from both the strings.
Remaining strings are:
String 1: umya
String 2: nh

Now all you need to do is find the sum of the remaining strings length % 6.

Output:
If obtained value is 1, output "Friends"
If obtained value is 2, output "Love"
If obtained value is 3, output "Affection"
If obtained value is 4, output "Marriage"
If obtained value is 5, output "Enemy"
If obtained value is 0, output "Siblings"
Input
You will be given two strings on different lines.

Constraints
1 <= Length of both the strings <= 100000
Output
Output a single string, the result of FLAMES test.
*/

// To take single line input
// var input = '';

// process.stdin.on('data', function(chunk){
// 	input += chunk; 
// })

// process.stdin.on('end',function(){
// 	input = input.split(' ');
// 	flames(input[0],input[1]);
// })

// To read multiline input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const strings = input.join(' ').split(' ');
  flames(strings[0], strings[1]);
});


function flames(a,b){
	let arrA = a.split('').sort();
	let arrB = b.split('').sort();


	let arr = arrA.length < arrB.length ? [...arrA] : [...arrB];

	for(let char of arr){
		if(arrA.indexOf(char)>-1 && arrB.indexOf(char)>-1){
			let id1 = arrA.indexOf(char);
			arrA.splice(id1, 1);
			let id2 = arrB.indexOf(char);
			arrB.splice(id2, 1);
		}
	}

	let ans = (arrA.length + arrB.length)%6 ;
	let res;
	ans===1?res="Friends":ans===2?res="Love":ans===3?res="Affection":ans===4?res="Marriage":ans===5?res="Enemy":res="Siblings";
	console.log(res);
}

function flames1(a,b){
    let mapA = new Map();
    let mapB = new Map();

	a = [...a].sort().join("");
    b = [...b].sort().join("");
	

    for(let i=0; i<a.length; i++){
        if(mapA.has(a[i])){
			mapA.set(a[i],mapA.get(a[i])+1);
		}else{
			mapA.set(a[i],1);
		}
		
    }

    for(let i=0; i<b.length; i++){
		if(mapB.has(b[i])){
			mapB.set(b[i],mapB.get(b[i])+1);
		}else{
			mapB.set(b[i],1);
		}
    }


    let str = a.length<b.length ? a : b;
    
	for(let i=0; i<str.length; i++){
        if(mapA.has(str[i]) && mapB.has(str[i])){
            let val = Math.min(mapA.get(str[i]),mapB.get(str[i]));
            mapA.set(str[i],mapA.get(str[i])-val);
            mapB.set(str[i],mapB.get(str[i])-val);
        }
    }

	let countA = [...mapA.values()].reduce((total,curr)=>total+=curr,0);
	let countB = [...mapB.values()].reduce((total,curr)=>total+=curr,0);
	
	let ans = ( countA%6 + countB%6 )%6 ;
	let res;
	ans===1?res="Friends":ans===2?res="Love":ans===3?res="Affection":ans===4?res="Marriage":ans===5?res="Enemy":res="Siblings";
	console.log(res);
}

flames1("saumya","ansh");

