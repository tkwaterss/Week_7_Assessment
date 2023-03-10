let test1 = [1,2,3,4,5,6];
let test2 = [0,1,0,2,3];
let test3 = [1];
let test4 = [1,2,-2,3,4];
let test5 = [0];

const sumZero = array => {
    for(let i = 0; i < array.length; i++) { //O(n)
        for(let j = i + 1; j < array.length; j++) { //O(n)
            if (array[i] + array[j] === 0) { //O(1)
                return true
            }
        }
    }
    return false;
}

console.log(sumZero(test1))
console.log(sumZero(test2))
console.log(sumZero(test3))
console.log(sumZero(test4))
console.log(sumZero(test5))

//runtime = O(n^2) - each for loop is O(n), when nested together this becomes O(n^2)
//space complexity = O(1) - no matter the size of the input, the output will alsways be either true or false.