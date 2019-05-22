const arraryAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
// this array will return 3 (abc.length)
const array1 = ['dabc', 'abc', 'abcd', 'kd', 'kabc']
array1.sort(function (a, b) {
    a.length - b.length
})

// this array will return 1, (a.length)
const array2 = ['a', 'ab', 'abc', 'cd']
array2.sort(function (a, b) {
    a.length - b.length
})

// how many times str apear in array. each element in array can be apear > 1 time.
function CountOfStringInArray(array, str) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        var re = new RegExp(str, "g");
        var _count = (array[index].match(re) || []).length;
        count += _count;
    }
    return count;
}

//output example: [{word: a, count: 10}, {word: b, count: 1}...{word: z, count: 7}]
function GetArrayCountOfAlphabet(array) {
    var newArray = [];
    arraryAlphabet.forEach((element) => {
        var count = CountOfStringInArray(array, element);
        newArray.push({ word: element, count });
    });
    return newArray;
}

// this function get array already short: [{word: a, count: 10}, {word: b, count: 9}...{word: z, count: 0}]
function GetArrayMaxCount(array) {
    var newArray = []
    var maxCount = array[0].count;
    newArray.push(array[0])
    for (let index = 1; index < array.length; index++) {
        if (array[index].count < maxCount) {
            return newArray;
        }
        else {
            newArray.push(array[index])
        }
    }
}

function GetMinLengthStringToCompare(array, alphabet) {
    for (let index = 0; index < array.length; index++) {
        var i = array[index].indexOf(alphabet)
        if (i != -1) {
            var strCompare = array[index].slice(i);
            return strCompare;
        }
    }
}
//test GetMinLengthStringToCompare , will return 'ab'
// let _strCompare = GetMinLengthStringToCompare(['ab', 'abab', 'abc', 'cd'], 'a')
// console.log(_strCompare)

function Recursion(array, strCompare, alphabet) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].indexOf(alphabet) != -1) {
            if (array[index].indexOf(strCompare) == -1) {
                //strCompare is not string we found (max length)
                return false;
            }
        }
    }
    return true;
}

// test function Recursiont, if return 2 is true;
// var count = Recursion(['ab', 'ab', 'abcabab', 'cd', 'cab'], 'ab', 'a', 1)
// console.log(count)

// find max length of str start with word from GetArrayMaxCount search in origin array
function FindMaxLengthOnAlphabet(array, strCompare, alphabet) {
    const isMaxlength = Recursion(array, strCompare, alphabet)
    if(isMaxlength){
        return strCompare.length;
    }else{
        var newStrCompare = strCompare.slice(0, strCompare.length - 1)
        FindMaxLengthOnAlphabet(array, newStrCompare, alphabet)
    }
}
// test FindMaxLengthOnAlphabet, will return 3
// var _maxLength = FindMaxLengthOnAlphabet(['babc', 'abc', 'abcabab'], 'abc', 'a')
// console.log(_maxLength)

function FindMaxLengthOnArrayMaxCount(array, arrMaxCount){
    let maxLength = 0;
    for (let index = 0; index < arrMaxCount.length; index++) {
        var alphabet = arrMaxCount[index].word;
        let strCompare = GetMinLengthStringToCompare(array, alphabet)
        var newMaxLength = FindMaxLengthOnAlphabet(array, strCompare, alphabet)
        if (newMaxLength > maxLength) {
            maxLength = newMaxLength;
        }
    }
    return maxLength;
}


function Result(array){
    let arrCountAlphabet = GetArrayCountOfAlphabet(array);

    // short array
    arrCountAlphabet.sort(function (a, b) { return b.count - a.count });
    
    // get first array of max count:
    let arrMaxCount = GetArrayMaxCount(arrCountAlphabet);
    
    let maxLength = FindMaxLengthOnArrayMaxCount(array, arrMaxCount);
    return maxLength;
}


//========================================
var maxLength1 = Result(array1);
// will return 3 (abc.length)
console.log("array1" ,maxLength1)

var maxLength2 = Result(array2);
// will return 1 (a.length)
console.log("array2: ", maxLength2)


