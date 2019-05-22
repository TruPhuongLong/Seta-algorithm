const array1 = [1, 4, 2, 3, 5];


function GetSumOnTop(n, array){
    let sum = 0;
    array.sort(function(a, b){
        return b - a;
    })
    for (let index = 0; index < n; index++) {
        sum += array[index]    
    }
    return sum;
}

// will return 9:
var sum = GetSumOnTop(2, array1);
console.log(sum)