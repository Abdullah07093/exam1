console.log("Exam1")
console.log("Task1")

function countt(a){
    return a.toString().length;
}
console.log(countt(318) );
console.log("Task2")
function lessThan100(a,b){
    if (a+b==100) {
        return true;
    } else {
        return false;
    }
} 
console.log(lessThan100(22, 15));
console.log("Task3")
function findMax(a){
    a = a + "";
return Math.max(...a);
}

console.log(findMax(13579));
console.log("Task4")
let b=3;
let c=0;

function sumCubes(a){
   if (b==0) return ;
        c+=Math.pow(b, a);
        b--;

        sumCubes(a);
}
sumCubes(3)
console.log(c)
console.log("Task5")

function sumOfDigits(){
    const getSumOfDigits=sumOfDigits();

    console.log(getSumOfDigits);
    return 0;
}

getSumOfDigits(1235);



