2 question in Javascript Algorithm is corresponding index1 and index2.

RUN:
    node index1.js for question 1
    node index2.js for question 2


Explain:
1. 
    + first i sort Origin Array .
    + i declare arraryAlphabet , it contain alphabet a, b , c, d...
    + count each alphabet, how many time it apear in array.
    + then take the max count (note it can be have many alphabet have same max count, example: {word: a, count: 10}, {word: b, count: 10}, then all a and b is will be consider to next stetp, and skip all alphabet with count < 10), i call this array with name: arrMaxCount
    + with alphabet, i find sortest string contain this alphabet in Origin Array
    + then i Recursion function FindMaxLengthOnAlphabet to find maxLength on each alphabet, i repeat that with all alphabet in arrMaxCount with function FindMaxLengthOnArrayMaxCount
    

2.
    + sort array from big -> small
    + get n first element then get sum .