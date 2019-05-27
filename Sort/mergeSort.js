function mergeSort(arr) {
   function mergeSort1 (arr) {
     if (arr === null || arr.length < 2) {
       return
     }
     mergeSort2(arr, 0, arr.length - 1)
   }
   function mergeSort2(arr, l, r) {
     if (l === r) {
       return
     }
     let mid = l + (Math.floor((r - l) / 2))
     mergeSort2(arr, l, mid)
     mergeSort2(arr, mid + 1, r)
     merge(arr, l, mid, r)
   }
   function merge(arr, l, m, r) {
     let help = []
     let i = 0
     let p1 = l
     let p2 = m + 1
     while (p1 <= m && p2 <= r) {
       help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
     }
     while (p1 <= m) {
       help[i++] = arr[p1++]
     }
     while (p2 <= r) {
       help[i++] = arr[p2++]
     }
     for (i = 1; i < help.length; i++) {
       arr[l + i] = help[i]
     }
   }
   mergeSort1(arr)
   return arr
}
let arr = [ 1, 6, 3 ,4 ,5 ]
console.log(mergeSort(arr))
