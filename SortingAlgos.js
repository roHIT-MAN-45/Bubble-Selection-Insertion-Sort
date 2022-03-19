/*
Bubble Sort
*/

/*
A sorting algorithm where the largest values bubble up to the top.
*/

/*
Pseudocode
⚡ Start looping from the end of the array with a variable called i towards the beginning.
⚡ Start an inner loop with a variable called j from the beginning until i - 1.
⚡ If arr[j] is greater than arr[j + 1], swap those two values!
*/

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // optimization (if there is no swap break out!)
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([7, 9, 5, 3, 2, 99, 55, -4]));

/*
Selection Sort
*/

/*
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
*/

/*
⚡ Store the first element as the smallest value you've seen so far.
⚡ Compare this item to the next item in the array until you find a smaller number.
⚡ If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
⚡ If the "minimum is not the value (index) you initially began with, swap the two values."
⚡ Repeat this with the next element until the array is sorted. 
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([88, 6, 99, 9, 5, 1, 33, 66]));

/*
Insertion Sort
*/

/*
Builds up the sort by gradually creating a larger left half which is always sorted.
*/

/*
Pseudocode
⚡ Start by picking the second element in the array.
⚡ Now compare the second element with the one before it and swap if necessary.
⚡ Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
⚡ Repeat until the array is sorted.
*/

function insertionSort(arr) {
  let j;
  let i;
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([2, 6, 34, 1, 0, 9]));
