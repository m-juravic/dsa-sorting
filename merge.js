/** Given two sorted arrays, merge and return a new sorted array.
 *
 * @param {Array} arr1: Sorted array 1
 * @param {Array} arr2: Sorted array 2
 * @returns: New sorted array from arr1 and arr2
 */

function merge(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];

  let out = []

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) { // We have yet to finish both
    if (i >= arr1.length) { // arr1 is done
      out.push(arr2[j]);
      j++;
      continue;
    }

    if (j >= arr2.length) { // arr2 is done
      out.push(arr1[i]);
      i++;
      continue;
    }

    if (arr1[i] <= arr2[j]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[j]);
      j++;
    }
  }

  return out;
}

/** Sort provided array of values using merge sort and return new sorted array
 *
 * @param {Array} values: Array of values to sort
 * @returns: Sorted Array of values
 */

function mergeSort(values) {}

module.exports = { merge, mergeSort};