// Given two strings str1 & str2, check if portion or whole of str1 is anagaram with str2.  


function portionAnangram(str1,str2) { 

  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");

  if(s1===s2){
    return true;
  }

  let j=0;
  for(let i=0; i<s1.length; i++){
    if(s1[i]===s2[j]){
      j++;
    }

    if(j===s2.length){
      return true;
    }
  }

  return false;
}

const ans = portionAnangram("hello","ole");
console.log(ans);
