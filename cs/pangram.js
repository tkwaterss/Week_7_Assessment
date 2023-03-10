let test1 = 'The quick brown fox jumps over the lazy dog!';
let test2 = 'I like cats, but not mice';
let test3 = 'zxcvbnmasdfghjklqwertyuiopoo'

const pangram = string => {
    let key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    string = string.toLowerCase(); //O(n)
    let count = 0;
    for(let i = 0; i < key.length; i++) { //O(1) if alphabet is constant length, else O(n)
        if(string.includes(key[i])) { //O(n)
            count++
        }
    }
    if(count === key.length) { //O(1)
        return true
    } else {
        return false
    }
}

console.log(pangram(test1))
console.log(pangram(test2))
console.log(pangram(test3))

//If we state that the alphebet length will never change
//Runtime = O(n) - There are multiple functions that scale proportionally with the input size, but none are nested together
//If alphabet array length can change, then it would be O(n^2)

//space complexity = O(1) - no matter then length of input, the output will always be true or false
