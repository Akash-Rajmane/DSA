for(let i=0; i<5; i++){
    let str = ""; 
    for(let j=i; j<5; j++){
        str += "*";
    }
    for(let j=i; j<2*i; j++){
        str += " ";
    }
    for(let j=i; j<5; j++){
        str += "*";
    }
    console.log(str);
}
/*
**********
**** ****
***  ***
**   **
*    *

*/

console.log("----------");

for(let i=0; i<5; i++){
    let str = ""; 
    for(let j=i; j<5; j++){
        str += "*";
    }
    for(let j=0; j<2*i; j++){
        str += " ";
    }
    for(let j=i; j<5; j++){
        str += "*";
    }
    console.log(str);
}

/*
**********
****  ****
***    ***
**      **
*        *

*/

console.log("----------");

for(let i=0; i<5; i++){
    let str = ""; 
    for(let j=i; j<5; j++){
        str += "*";
    }
    console.log(str);
}
for(let i=0; i<5; i++){
    let str = ""; 
    for(let j=5-i; j<=5; j++){
        str += "*";
    }
    console.log(str);
}

/*
*****
****
***
**
*
*
**
***
****
*****

*/

