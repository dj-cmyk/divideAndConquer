function countZeroes(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
 
  let firstZeroIndex = 0;

  while (leftPointer <= rightPointer) {
    let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
    
    // divide array in half and check if middle value is 0
    if (arr[middleIndex] === 0) {
        // if yes -> need to check lower indexes
        // leave firstZeroIndex as zero until proven otherwise
        rightPointer = middleIndex - 1;
        
    } else {
        // if no -> need to check higher indexes and reset firstZeroIndex to be above middle index
        firstZeroIndex = middleIndex + 1;
        leftPointer = middleIndex + 1;

    }
  }
return arr.length-firstZeroIndex

}

module.exports = countZeroes



