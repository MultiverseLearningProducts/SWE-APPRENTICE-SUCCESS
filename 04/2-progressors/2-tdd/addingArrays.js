export const addingArrays = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return "Arrays are different lengths."
    }
     if ([...arr1, ...arr2].find((x) => typeof x != "number")) {
        return "Not all elements are numbers."
     }
     return arr1.map((x,i) => x+arr2[i])
}
