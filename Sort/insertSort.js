function insertSort (arr) {
  function sort(arr) {
    if (arr === null || arr.length < 2) {
      return
    }
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        swap(arr, j, j + 1)
      }
    }
  }
  function swap (arr, i, j) {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
  }
  sort(arr)
  return arr
}
let arr = [-35 ,-9 ,-2, 27 ,-64 ,-37, 46 ,-12, 30, -38 ,-43 ]
console.log(insertSort(arr))
