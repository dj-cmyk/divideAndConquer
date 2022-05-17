function findFloor(arr, num) {
  // check num less than first value in array, if so, floor does not exist
  if (num < arr[0]) {
    return -1;
  }
  // check num greater than last value in array. if so, floor is highest value (last item in array)
  if (num > arr[arr.length-1]) {
    return arr[arr.length-1];
  }

  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let floorIndex = 0;

  while (leftPointer <= rightPointer) {
    let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
    
    // divide array in half and check if middle value is > num
    if (arr[middleIndex] > num) {
        // if yes -> need to check lower indexes
        // leave floorIndex as zero until proven otherwise
        rightPointer = middleIndex - 1;
        
    } else if (arr[middleIndex] < num) {
        // if no -> need to check higher indexes and reset floorIndex to be above middle index
        floorIndex = middleIndex + 1;
        leftPointer = middleIndex + 1;
    }
    else {
      return arr[middleIndex]
    }
  }
  return arr[floorIndex-1];

}

module.exports = findFloor




// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

