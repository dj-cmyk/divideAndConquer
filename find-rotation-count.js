function findRotationCount(arr) {
    // find pivot point
    // checking against the last value to find out where the pivot point is. The last value will be lower than the left side and higher than the right side
    let lastValue = arr[arr.length-1]
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
 
    let pivotIndex = 0;

    while (leftPointer <= rightPointer) {
        let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
        
        // divide array in half and check if middle value is < num
        if (arr[middleIndex] < lastValue) {
            // if yes -> need to check lower indexes
            // leave pivotIndex as zero until proven otherwise
            rightPointer = middleIndex - 1;
            
        } else {
            // if no -> need to check higher indexes and reset pivotIndex to be above middle index
            pivotIndex = middleIndex + 1;
            leftPointer = middleIndex + 1;

        }
    }

    if (pivotIndex >= arr.length){
        return arr.length - 1;
    }
    return pivotIndex;
  
}

module.exports = findRotationCount


// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0