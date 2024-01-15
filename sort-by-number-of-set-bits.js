function sortBySetBitsCount(arr) {
    function countSetBits(num){
      let count = 0;
      while(num!==0){
          count += num&1;
          num >>= 1; 
      }
      return count;
    }  
  
    arr.sort((a,b)=>{
      let a1 = countSetBits(a);
      let b1 = countSetBits(b);
      if(a1!==b1){
          return a1-b1;
      }else{
          return a-b;
      }
      })
  
      console.log(arr);
  };

  sortBySetBitsCount([0,1,2,3,4,5,6,7,8]);


  //sort array of numbers based on how close it is to given number
  function sortByProximity(arr,num){
    arr.sort((a,b)=>{
        let a1 = Math.abs(num-a);
        let b1 = Math.abs(num-b);
        return a1-b1;
    })
    console.log(arr);
  }

  sortByProximity([1,3,4,5,6,7,8,9],5);