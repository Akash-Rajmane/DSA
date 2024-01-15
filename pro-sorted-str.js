function proSortedStr(str){
    let strU = "";
    let strL = "";
    let sortedStr = [...str].sort().join("");
    
    for(let i=0; i<str.length; i++){
        if(sortedStr.charCodeAt(i)<=90 && sortedStr.charCodeAt(i)>=65){
            strU += sortedStr.charAt(i); 
        }else{
            strL += sortedStr.charAt(i); 
        }
    }
    
    let res = "";

    let i=0;
    let j=0;
    let k=0;
    
    while(i<str.length){
        
        if(j<strU.length){
            res += strU.charAt(j);
            j++;
        }

        if(k<strL.length){
            res += strL.charAt(k);
            k++;
        }

        i++;
    }

    console.log(res);
}

proSortedStr("AKasHRajmane");