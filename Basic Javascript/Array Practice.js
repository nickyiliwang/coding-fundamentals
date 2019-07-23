// function printReverse(array){
//     for (let i = array.length; i >= 0; i--) {
//         return array[i];
//     }
// }
// console.log(printReverse([1,2,3,4]));
// console.log(printReverse(["a","b","c"]));

// let truthArr = [];
// function isUniform(array) {
//     array.forEach(i => {
//             if (array[0] == i) {
//                 return truthArr.push(true);
//             }
//             return truthArr.push(false);
//         }
//     );
//     if (truthArr.indexOf(false) === -1) {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isUniform(["a", "a", "a", "a"]));
// console.log(isUniform(["b", "a", "a", "a"]));

// function sumArray(array){
//     return array.reduce((a, b) => a += b);
// }
// console.log(sumArray([1,2,3]))
// console.log(sumArray([10,3,10,4]))
// console.log(sumArray([-5, 100]))

// function max(array) {
//    return Math.max(...array);
// }

// console.log(max([1,2,3]))
// console.log(max([10,3,10,4]))
// console.log(max([-5, 100]))