// var  ,let ,const

//var  - Function Scoped

/* var a = 10; //Global scope

console.log(a);

//Defination of the function
function test()
{
    console.log("Hello manikanta");
    var a = 20; //Local scope
    console.log(a);

    if (true)
    {
        var a = 30;
        console.log(a);
    }

    console.log("F -- > "+a)
}
// calling of the Funcction
test();
*/
//let - Block scoped

let b = 20 // global scope
console.log(b);

function testPlay1() {
    console.log("hello manikanta01");
    let b = 30;    //local scope
    console.log(b);
    if (testPlay1ṇ) {
        let b = 40;
        console.log(b)
    }
    console.log("let b --> "  +b)
}


//let does not allow redeclartion in the sam escope
//let b=40 erroe idnetifier b has alaready beend eclated
//let a = 10;
//let a = 10;

let a = 10;
a = 20;
console.log(a); //20

//const - blpocked scope readonly
const c = 50; //global scope
console.log(c);