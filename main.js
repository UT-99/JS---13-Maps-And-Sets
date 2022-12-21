// Ques 1.
/*
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef

*/


let myStr ='abcadeecfb';
myStrArr= myStr.split('');

for(let i = 0 ; i <myStrArr.length ; i++){
    for(let j =i+1 ; j<myStrArr.length ; j++){
        if(myStrArr[i] === myStrArr[j]){
          myStrArr.splice(j, 1);
        }
    }    
}
myStr = myStrArr.join("");

console.log('After Deletion : ',myStr);


// Ques 2 .

/*
Problem:
You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1

*/

console.log("Question 2 : ");

let myStr2 ='abcadeecfb';

for(let i = 0 ; i < myStr2.length ; i++){
    count = 1;
    for(let j = i + 1 ; j < myStr2.length ; j++){

        if(myStr2[i] === myStr2[j]){
            count = count + 1;
            console.log(`${myStr2[i]} = ${count}`);
        }
        else if (myStr2.indexOf(i) === myStr2.lastIndexOf(i)){
            console.log(`${myStr2[i]} = ${count}`);
        }
        

    }
}