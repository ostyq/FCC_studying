function diffArray(arr1, arr2) {
    const filteredArr2 = arr2.filter((element) => arr1.indexOf(element) === -1);
    const filteredArr1 = arr1.filter((element) => arr2.indexOf(element) === -1);
    return filteredArr2.concat(filteredArr1);
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));