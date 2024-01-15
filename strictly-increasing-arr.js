function strictlyIncreasingArr(arr){
    arr[0] = 1;
    
    let j=2;
    for(let i=1; i<arr.length; i++){
        while(j<=arr[i]/2){
            if(arr[i]%j===0 && j>arr[i-1]){
                arr[i] = j;
                break;    
            }
            j++;
        }
    }

    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>=arr[i+1]){
            count++;
            break;
        }
    }

    if(count>0){
        console.log("no");
    }else{
        console.log("yes");
    }

}

strictlyIncreasingArr([1,2,16,16,10]);