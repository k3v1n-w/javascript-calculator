// class calculator{
//     constructor(firstNum,secondNum){
//         this.firstNum = a;
//         this.secondNum = b;
//     }
// }

//  var inputA = document.getElementById("inputOne").value
//  var inputB = document.getElementById("inputTwo").value
var inputA 
var inputB 
var total
let m1 = 0
console.log(m1)
console.log("loaded javascript")

var numbersContainer = document.getElementById("numbers")
var numberOfbuttons = 9
var buttons = []
    for(let i = 0; i <= numberOfbuttons; i++){
    buttons[i] = document.createElement("button")
    buttons[i].innerText = i
    buttons[i].classList.add(`btn`)
    numbersContainer.appendChild(buttons[i])
    buttons[i].addEventListener('click', handleButton)
    

}

let numbersToCalculate = []
//inputA = document.getElementById("").value
//inputB = document.getElementById("bt").value

//inputA = document.getElementById("numbers") = inputA
//inputB = document.getElementById("numbers") = inputB
//inputA = numbersToCalculate[0,1]
//inputB = numbersToCalculate[3,4]
//operatorC = numbersToCalculate[2]
//if (operatorC == '+'){
//    total = inputA + inputB
//    console.log(total)
//} else
//    cons

 function addition(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    //console.log(Number(inputA, "variable A"))
    //console.log(Number(inputB, "variable B"))

    total = Number(inputA) +Number(inputB);
    document.getElementById("total").innerText = total
    console.log(total)
    // return total;
}

function subtraction(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    //console.log(inputA, "variable A")
    //console.log(inputB, "variable B")
    
    total = inputA - inputB;
    document.getElementById("total").innerText = total
    console.log(total)
    
}

function division(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    //console.log(inputA, "variable A")
    //console.log(inputB, "variable B")
    
    total = inputA / inputB;
    document.getElementById("total").innerText = total
    console.log(total)
}

function multiplication(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    //console.log(inputA, "variable A")
    //console.log(inputB, "variable B");
    
    total = inputA * inputB;
    document.getElementById("total").innerText = total
    console.log(total)
}

function squared(){
    inputA = document.getElementById("inputOne").value
    const squareNum = 2


    //console.log(inputA, "variable A")
    console.log(squareNum, "variable B");

 
    total = inputA ** squareNum 
    document.getElementById("total").innerText = total
    console.log(total)
 
    
 }

function squaredRoot(){
    inputA = document.getElementById("inputOne").value

    //console.log(inputA,"variable A")
    total = Math.sqrt(inputA)

    document.getElementById("total").innerText = total
    console.log(total)

}

function factorial(){
    inputA = parseInt(document.getElementById("inputOne").value)
    if (inputA < 0){
        window.alert("You can't do a factorial if your number is less than 0")
    }
    else
    {    
    
        let total = 1
        for (let i = 1; i <= inputA; i++){
            if (i>1) {
                total *= i
                console.log("i: " + i)
                console.log("total: " + total)
            }
       }
        if (inputA > 170){
            window.alert("Unfortunatley we can't find the factorial of a number above 170")
        }
        else{
            document.getElementById("total").innerText = total
            console.log(total)  
    }   }
    
}
let memo = 0;
function memory(){
    if (total>0){
    document.getElementById("total").innerText = total
    memo = total
    console.log(memo)
}
else{
   window.alert("We cannot store the number to memory as it is not greater than 0") 
}
    
    
}

function memoryReturn(){
   inputA = memo
   document.getElementById("inputOne").value = inputA
   return inputA

}

function memoryClear(){
    memo = 0
    document.getElementById("total").innerText = memo
    console.log(memo)
}

function clear(){
    let numbersToCalculate = [ ]
    //numbersToCalculate = [];
    document.getElementById("total").innerText = numbersToCalculate.value
    console.log(numbersToCalculate)
    

}

function equal(){
    
    
//Here is where we can sort the array to solve the calculation



}
function handleButton(e){
    numbersToCalculate.push(e.target.innerText)
    console.log(e)
    console.log(numbersToCalculate)
    document.getElementById("total").innerText = numbersToCalculate.join(" ")
    

}

function handleFunctionButton(){
}
console.log(handleFunctionButton)