let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return inputArr;
// };
console.log(bubbleSort([5, 3, 1, 4, 6, 6, 7, 8, 1, 1, 1]))