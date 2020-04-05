// https://www.cs.usfca.edu/~galles/visualization/Search.html

let binarySearchIterative = (arr, key) => {
    let min = 0,
        max = arr.length - 1,
        guess;
    while (min <= max) {
        guess = Math.floor(min + ((max - min) / 2));
        if (arr[guess] === key) {
            return key + " found at position " + guess;
        } else if (arr[guess] < key) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
};

let binarySearchRecursive = (arr, key, min, max) => {
    if (min > max) {
        return -1;
    } else {
        let guess = Math.floor(min + ((max - min) / 2));
        if (arr[guess] === key) {
            return key + " found at position " + guess;
        } else if (arr[guess] < key) {
            return binarySearchRecursive(arr, key, guess + 1, max);
        } else {
            return binarySearchRecursive(arr, key, min, guess - 1);
        }
    }
};

console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7], 1)); // start from 0
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 5, 2, 7)); // start from 0