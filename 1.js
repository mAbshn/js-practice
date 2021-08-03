// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let arr1 = ['a', 'b', 'c'];
// arr1.splice(3, 0, 1, 2 ,3);
// console.log(arr1);

// let arr1 = [3, 4, 1, 21, 7];
// arr1.sort((a, b) => a - b);
// console.log(arr1);

// let obj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(obj));

// let arr1 = ['Привет, ', 'мир', '!'];
// console.log(arr1.join(''));

// const fill = (arraySize, value) => new Array(arraySize).fill(value);
// console.log(fill(4, 'hui'));

// const reverse = (array) => {
//     let tempArr = array.slice();
//     for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
//         array[i] = tempArr[j];
//     }
//     return array;
// }

// const data = [1, 2, 3, 5, 0, 10, 123, 12];
// console.log(reverse(data));

// const compact = (array) => {
//         newArray = array.filter(elem => elem );
//         return newArray;
//    }

//    const data = [0, 1, false, 2, undefined, '', 3, null];
//    console.log(compact(data)) // [1, 2, 3]

// const fromPairs = (array) => {
//         return array.reduce((accum, elem) => {
//             accum[elem[0]] = elem[1];
//             return accum;
//         },{});
//    }

//    const data = [['a', 1], ['b', 2]];
//    console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

// const without = (array, ...args) => {
//     return array.filter((elem) => {
//         for (let i of args) {
//             if (elem === i) return false;
//         }
//         return true;
//     });
// }

// const data = [1, 2, 3, 1, 2, 4, 7];
// console.log(without(data, 1, 3, 7));

// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];
// arr3 = [...arr1];
// arr3[0] = 9;
// console.log(arr1);

// const isEqual = (firstArray, secondArray) => {
//     if (firstArray.length !== secondArray.length) {
//         return false;
//     }
//         return firstArray.join('') == secondArray.join('');
//   }

//   const arr1 = [1, 2, '', 3, 4];
//   const arr2 = [1, 2, '', 3, 4];
//   const arr3 = [1, 2, 3, 5];
//   const arr4 = [1, 2, 3, 4, 5];
//   console.log(isEqual(arr1, arr2)); // true
//   console.log(isEqual(arr1, arr3)); // false
//   console.log(isEqual(arr1, arr4)); // false

// const flatten = (array) => {
//         return array.reduce((accum, elem) => {
//                 if (!(Array.isArray(elem))) accum.push(elem);
//                 else accum = accum.concat(flatten(elem));
//                 return accum;
//         }, []);
//         // if (resultArray.some((elem) => Array.isArray(elem))) return flatten(resultArray);
//         // else return resultArray;
//    }

// // const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
//    const data = [1, 2, [3, 4, [5]]];
//    const string = [[["b", "c"], ["c", "d"]], [["v", "e"], ["r", "g"]]];
//    console.log(flatten(data)); // [1, 2, 3, 4, 5]
//    console.log(flatten(string)); // ["b", "c", "c", "d", "v", "e", "r", "g"]

// const chunk = (array, size) => {
//         let iterations = Math.ceil(array.length/size);
//         let firstElem = 0;
//         let newArray = array.slice();
//         for (let i = 0; i < iterations; i++) {
//         newArray.splice(firstElem, size, newArray.slice(firstElem, firstElem + size));
//         firstElem += 1;
//         }
//         return newArray;
// }

// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(chunk(data, 6));
// console.log(chunk(data, 3));
// console.log(chunk(data, 1));






// const intersection = (...arrays) => {
//         const newArray = arrays[0].filter((firstArrElem) => {
//                 for (let arrNumber = 1; arrNumber < arrays.length; arrNumber++) {
//                         for (let elem of arrays[arrNumber]) {
//                                 if (firstArrElem === elem) return true;
//                         }
//                 }
//         });
//         return Array.from(new Set(newArray));
// }

// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];
// console.log(intersection(arr1, arr2)) // [2]
// console.log(intersection(arr3, arr4, arr5)) // ['b']
// console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']







// const makePairs = (object) => {
//         let newArray = [];
//         for (let key in object) {
//                 if (object.hasOwnProperty(key)) {
//                         newArray.push([key, object[key]]);
//                 }
//         }
//         return newArray;
// };

// const data = { a: 1, b: 2 };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// const without = (object, ...args) => {
//         const newObject = {...object};
//         for (let arg of args) delete newObject[arg];
//         return newObject;
//       };

//       const data = { a: 1, b: 2, c: 3 };
//       console.log(without(data, 'b', 'c')); // { a: 1 }

// const isEmpty = (object) => {
//         for (let key in object) {
//                 if (object[key] && object[key] != null && !isNaN(object[key]) && object[key] != undefined) return false;
//         }
//         return true;
// };

// const data = { a: '', b: undefined, c: NaN};
// const data2 = {};
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

// const isEqual = (firstObject, secondObject) => {
//         const firstKeys = Object.keys(firstObject);
//         const secondKeys = Object.keys(secondObject);
//         if (firstKeys.length !== secondKeys.length) return false;
//         return !firstKeys.filter((elem) => firstObject[elem] !== secondObject[elem]).length;
// };

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

// const invoke = (object, path, func, args) => {
//         let arrPath = path.split('.');
//         let target = arrPath.reduce((acc, key) => {
//                 return acc = acc[key] ? acc[key] : object[key];
//         }, {});
//         return Array.prototype[func].apply(target, args);
// };

// const data = { a: { b: [1, 2, 3] } }
// console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]


// const isEmptyDeep = (element) => {
//         if (element === null) {
//                 return true;
//         }
//         if (Array.isArray(element)) {
//                 if (element.length === 0) {
//                         return true;
//                 }

//                 let result;
//                 for (let i = 0; i < element.length; i += 1) {
//                         if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
//                                 || (typeof element[i] === 'string' && element[i] !== '')) {
//                                 result = false;
//                                 break;
//                         }
//                         if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
//                                 result = isEmptyDeep(element[i]);
//                                 break;
//                         }

//                         result = true;
//                 }

//                 return result;
//         }
//         if (typeof element === 'object') {
//                 const objectKeys = Object.keys(element);
//                 if (objectKeys.length === 0) {
//                         return true;
//                 }

//                 let result;
//                 for (let i = 0; i < objectKeys.length; i += 1) {
//                         const value = element[objectKeys[i]];

//                         if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
//                                 || (typeof value === 'string' && value !== '')) {
//                                 result = false;
//                                 break;
//                         }
//                         if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
//                                 result = isEmptyDeep(value);
//                                 break;
//                         }

//                         result = true;
//                 }

//                 return result;
//         }
// };

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 1 } };
// console.log(isEmptyDeep(data)); // true
// console.log(isEmptyDeep(data2)); // false


const intersection = (firstObject, secondObject) => {
        let firstObjKeys = Object.keys(firstObject);
        return firstObjKeys.reduce((acc, elem) => {
                if (isNaN(firstObject[elem]) && isNaN(secondObject[elem])) acc[elem] = NaN;
                if (firstObject[elem] === secondObject[elem]) acc[elem] = firstObject[elem];
                return acc;
        }, {})
};

const data = { a: 1, b: 2, c: NaN };
const data2 = { c: 1, b: 2, c: NaN };
console.log(intersection(data, data2)); // { b: 2 }