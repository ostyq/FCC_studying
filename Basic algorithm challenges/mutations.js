function mutation(arr) {
    let checker = arr[1].toLowerCase();
    let checked = arr[0].toLowerCase();

    for (let i = 0; i < checker.length; i += 1) {
        if (checked.indexOf(checker[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));