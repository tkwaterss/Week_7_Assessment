let test1 = 'hello';
let test2 = 'donkey';
let test3 = 'Monkey';
let test4 = 'Banananananana';

const uniqueChars = string => {
    let strArr = string.toLowerCase().split('')
    for(let i = 0; i < strArr.length; i++) {
        for(let j = i + 1; j < strArr.length; j++) {
            if(strArr[i] === strArr[j]) {
                return false;
            }
        }
    }
    return true
}

console.log(uniqueChars(test1))
console.log(uniqueChars(test2))
console.log(uniqueChars(test3))
console.log(uniqueChars(test4))

//runtime = O(n^2) - each for loop is O(n), when nested together this becomes O(n^2)
//space complexity = O(1) - no matter the size of the input, the output will alsways be either true or false.