function sortedFrequency(sortedArray, num) {
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
   
    let firstNumIndex = 0;
    let lastNumIndex = sortedArray.length - 1;
  
    // check if num is greater than the last number in the sorted array or less than the first number, this means it's not in the array at all on either bound
    if (num > sortedArray[rightPointer] || num < sortedArray[0]) {
        return -1;
    } 

    // find the left side boundary of the number
    while (leftPointer <= rightPointer) {
      let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
      
      // divide array in half and check if middle value greater than num
      if (sortedArray[middleIndex] >= num) {
          // if yes -> need to check lower indexes
          // leave firstNumIndex as zero until proven otherwise
          rightPointer = middleIndex - 1;
          
      } else {
          // if no -> need to check higher indexes and reset firstNumIndex to be above middle index
          firstNumIndex = middleIndex + 1;
          leftPointer = middleIndex + 1;
      }
    }

    //reset the pointers
    leftPointer = 0;
    rightPointer = sortedArray.length - 1;

    // find the right side boundary of the number
    while (leftPointer <= rightPointer) {
        let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
        
        // divide array in half and check if middle value greater than num
      if (sortedArray[middleIndex] > num) {
        // if yes -> need to check lower indexes and reset lastNumIndex to be below middle index
        lastNumIndex = middleIndex - 1;
        rightPointer = middleIndex - 1;
        
    } else {
        // if no -> need to check higher indexes 
        // leave lastNumIndex as end of array until proven otherwise
        leftPointer = middleIndex + 1;
    }
    }
    return lastNumIndex - firstNumIndex + 1
}

module.exports = sortedFrequency


// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1