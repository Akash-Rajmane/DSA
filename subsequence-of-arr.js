function printSub(arr){
    let nums = [];
    for(i=1; i<=Math.pow(2,arr.length)-1; i++){
        let binary = i.toString(2);
        while(binary.length<arr.length){
            binary = "0" + binary;
        }
        nums.push(binary);
    }

    for(let i=0; i<nums.length; i++){
        let sub = [];
        for(let j=0; j<nums[i].length; j++){
            if(nums[i][j]==="1"){
                sub.push(arr[j]);
            }
        }
        console.log(sub);
    }
}

//printSub([1,2,3])

function printSubsequencesWithBits(arr) {
    const n = arr.length;
    const totalSubsequences = 2 ** n; // Total number of subsequences
  
    for (let mask = 0; mask < totalSubsequences; mask++) {
      const subsequence = [];
      for (let i = 0; i < n; i++) {
        // Check if the i-th bit is set in the mask
        if (mask & (1 << i)) {
          subsequence.push(arr[i]);
        }
      }
      console.log(subsequence);
    }
  }
  
  const array = [1, 2, 3];
  //console.log("Subsequences of [1, 2, 3] using bit manipulation:");
  //printSubsequencesWithBits(array);

  function printSubsequences(arr, index = 0, subsequence = []) {
    // Base case: when we reach the end of the array
    if (index === arr.length) {
      if (subsequence.length > 0) {
        console.log(subsequence);
      }
      return;
    }
  
    // Include the current element in the subsequence
    subsequence.push(arr[index]);
    printSubsequences(arr, index + 1, subsequence);
  
    // Exclude the current element from the subsequence
    subsequence.pop();
    printSubsequences(arr, index + 1, subsequence);
  }
  
  const arr = [1, 2, 3];
  console.log("Subsequences of [1, 2, 3] in the specified order:");
  printSubsequences(arr);
  