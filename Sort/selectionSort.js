function selectionSort (arr) {
  function sort(arr) {
    if (arr === null || arr.length < 2) {
      return
    }
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        minIndex = arr[minIndex] < arr[j] ? minIndex : j
      }
      swap(arr, i, minIndex)
    }
  }
  function swap(arr, i, j) {
    let tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
  }
  sort(arr)
  return arr
}
let arr = [-35 ,-9 ,-2, 27 ,-64 ,-37, 46 ,-12, 30, -38 ,-43 ]
console.log(selectionSort(arr))
