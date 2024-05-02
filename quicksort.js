function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    return arr;
  }
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Orient the pivot so that...
  
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  const sortedL = quicksort(left)
  const sortedR = quicksort(right)
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
 return [...sortedL, pivot, ...sortedR];
}


module.exports = [quicksort];
