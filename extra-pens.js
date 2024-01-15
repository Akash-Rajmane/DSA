/*

*/

function extraPens(arr){
    let work = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]>0 && arr[i]>Math.abs(arr[j]) && arr[j]<0){
                work += Math.abs(i-j)*Math.abs(arr[j]);
                arr[i] = arr[i]-Math.abs(arr[j]);
                arr[j] = 0;
            }else if(arr[i]>0 && arr[j]<0 && 
            arr[i]<=Math.abs(arr[j])){
                work += Math.abs(i-j)*arr[i];
                arr[j] = arr[j] + arr[i];
                arr[i] = 0;
            }
        }
    }
    console.log(work);
}

extraPens([-1,3,2,-3,0,-1]);