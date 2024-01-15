function reducedStr(s1,s2) {
    let i=0;
    let j=0;
    while(i<s1.length && j<s2.length){
      if(s1[i]===s2[j]){
          i++;
          j++;
      }else if(s2.charCodeAt(j)>=48 && s2.charCodeAt(j)<=57){
         // If str2 has a digit, remove that many characters from str1
          let str = "";
          while(s2.charCodeAt(j)<65 && j<s2.length){
              str += s2[j];
              j++; 
          }
          let num = parseInt(str);
          i=i+num;
      
      }else{
        return false;
      }
    }
    // If both strings have been fully processed, it's valid
    return i===s1.length && j===s2.length;
  };

  //console.log(reducedStr("AKASH","AKA1"));

function reducedStr1(s1,s2){
    let i=0;
    let j=0;
    while(i<s1.length || j<s2.length){
      if(s1[i]===s2[j]){
          i++;
          j++;
      }else{
          let str = "";
          while(s2.charCodeAt(j)<65){
              str += s2[j];
              j++; 
          }
          let num = parseInt(str);
          i=i+num;
          if(s1[i]!==s2[j]){
            return false;
          }
      }
    }
    return i===s1.length && j===s2.length;
}

console.log(reducedStr1("AKASH","AKA1"));