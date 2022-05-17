function findRotatedIndex(arr, num) {
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

    // figure out which side of the pivot point the number is in
    // run binary search in the correct half of the array

    if (num > lastValue) {
        // have to look on the left side of the array
        // reset the pointers
        leftPointer = 0;
        rightPointer = pivotIndex - 1

        while (leftPointer <= rightPointer) {
            let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
            
            // divide array in half and check if middle value is < num
            if (arr[middleIndex] > num) {
                // if yes -> need to check lower indexes
                rightPointer = middleIndex - 1;
                
            } else if (arr[middleIndex] < num) {
                // if no -> need to check higher indexes and reset 
                leftPointer = middleIndex + 1;
            } else {
                return middleIndex;
            }
        }

    } else {
        // have to look on the right side of the array
        leftPointer = pivotIndex;
        rightPointer = arr.length -1;

        while (leftPointer <= rightPointer) {
            let middleIndex = Math.floor((leftPointer + rightPointer) / 2)
            
            // divide array in half and check if middle value is < num
            if (arr[middleIndex] > num) {
                // if yes -> need to check lower indexes
                rightPointer = middleIndex - 1;
                
            } else if (arr[middleIndex] < num) {
                // if no -> need to check higher indexes and reset 
                leftPointer = middleIndex + 1;
            } else {
                return middleIndex;
            }
        }
    }
    return -1
    

}

module.exports = findRotatedIndex



// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1