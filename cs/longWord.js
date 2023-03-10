let test1 = ['hello', 'world']
let test2 = ['a', 'be', 'cee', 'deee', 'eeeee']
let test3 = ['a', 'asldkfjk', 'akjghdflksjdafha']

const longWord = array => {
    let length = 0;
    let longest;
    array.forEach(word => { //O(n)
        if (word.length > length) {
            length = word.length;
            longest = word
        }
    })
    return `${longest} is the longest word with a length of ${length}`
}

console.log(longWord(test1))
console.log(longWord(test2))
console.log(longWord(test3))

//runtime = O(n) - .forEach() scales proportionally with array length, but everything else is constant
//space complexity = O(n) - the output is proportional to the length of the longest word in the input array