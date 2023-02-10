/** Sort provided array of values using bubble sort and return new sorted array
 *
 * @param {Array} values: Values to sort
 * @returns: Sorted Array
 */

function bubbleSort(values) {

  if (values.length <= 1) return values;

  for (let i = values.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++ ) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j] ]
      }
    }
  }
  return values;
}

module.exports = bubbleSort;