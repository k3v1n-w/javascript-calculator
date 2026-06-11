//Declare global variables
var inputA 
var inputB 
var total
let m1 = 0
let memo = 0
let numbersToCalculate = []
console.log(m1)
console.log("loaded javascript")

// Define calc buttons and add event handler to each + style class
var numbersContainer = document.getElementById("numbers")
var numberOfbuttons = 9
var buttons = []
    for(let i = 9; i >= 0; i--){
    buttons[i] = document.createElement("button")
    buttons[i].innerText = i
    buttons[i].classList.add(`btn`)
    numbersContainer.appendChild(buttons[i])
    buttons[i].addEventListener('click', handleButton)
}


 function addition(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    total = Number(inputA) + Number(inputB);
    document.getElementById("total").innerText = total
    console.log(total)
}

function subtraction(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value

    total = inputA - inputB;
    document.getElementById("total").innerText = total
    console.log(total)
}

function division(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value
    total = inputA / inputB;
    document.getElementById("total").innerText = total
    console.log(total)
}

function multiplication(){
    inputA = document.getElementById("inputOne").value
    inputB = document.getElementById("inputTwo").value
    
    total = inputA * inputB;
    document.getElementById("total").innerText = total
    console.log(total)
}
function displayDelete(){
    let removed = numbersToCalculate.pop()
    document.getElementById("display").innerText = " " + numbersToCalculate.join(" ") 
}

function squared(abc){
    //This function used to calculate the squared
    const squareNum = 2
    if(abc){
        tempEqual =  abc ** squareNum 
    }

    console.log(tempEqual)
    return tempEqual
    
 }

function squaredRoot(xyz){
    //This fucntion is used to calculate the squared root
    if (xyz) {
        temp = Math.sqrt(xyz)
    }
    console.log(temp)
    return temp

}

function factorial(efg){
    // This function is used to calculate the factorial
    if (efg <= 0){
        window.alert("You can't do a factorial if your number is less than 0")
        return false;
    }
    else
    {    
    
        let temp = 1
        for (let i = 1; i <= efg; i++){
            if (i>1) {
                temp *= i
                console.log("i: " + i)
                console.log("total: " + temp)
            }
        }
        if (efg > 170){
            window.alert("Unfortunatley we can't find the factorial of a number above 170")
            return false;
        }
        else{
            console.log(temp)
            return temp
        }
    }
}

function memory(total){
    // This stores the number chosen in memory
    if (total > 0){
        memo = total
        console.log(memo)
    } else {
        window.alert("We cannot store the number to memory as it is not greater than 0") 
    }
    return true
    
}

function memoryReturn() {
    // This returns the number that is stored in memory
    console.log("Memory: " + memo)
    var tempTotal = memo
    if (tempTotal > 0 && tempTotal != "") {
        console.log(numbersToCalculate)
        numbersToCalculate.push(tempTotal)
        document.getElementById("display").innerText = " " + numbersToCalculate.join(" ")//i took+ numbersToCalculate.join(" ")
        return tempTotal
    } else {
        return true
    }
    

}

function memoryClear() {
    // Clears the memory & display & resets the array
    memo = 0
    numbersToCalculate = [];
    document.getElementById("display").innerText = memo
    console.log(memo)
    return true
}

function displayclear(e){
    // Function to handle Clear (C) event by emptying array and clear display
    numbersToCalculate = [];
    document.getElementById("display").innerText = ""

}

function displayTotal(total) {
    // This function displays the total
    if (total) {
        document.getElementById("display").innerText += " = " + total 
    }
    total = 0;
}

function equal(){
    //Here is where we can sort the array to solve the calculation

    //Addition
    let firstNum = ""
    let secondNum = "" // second val after operator
    let opX = ""
    for (i = 0; i < numbersToCalculate.length; i++) {
        //console.log(numbersToCalculate[i])
        valX = numbersToCalculate[i]
        if (parseInt(valX) && opX.length == 0) {
            //console.log(numX)
            firstNum = firstNum + valX
        } else if (opX.length > 0) {
            secondNum = secondNum + valX
        } else {
            console.log(valX)
            opX = valX
        }
        
    }
    //total = eval(firstNum+opX+secondNum)
    //console.log(valX)
    console.log(firstNum)
    console.log(secondNum)
   

    switch (opX) {
        case "+":
            total = eval(firstNum+opX+secondNum)
            console.log(opX);
            break;
        case "-":
            total = eval(firstNum+opX+secondNum)
            console.log(opX);
            break;
        case "x":
            total = eval(firstNum*secondNum)
            console.log(opX);
            break;
        case "÷":
            total = eval(firstNum/secondNum)
            console.log(opX);
            break;
        case "!":
            total = factorial(firstNum)
            console.log(opX);
            break;
        case "√":
            total = squaredRoot(firstNum);
            console.log(total)
            console.log(opX);
            break;
        case "²":
            total = squared(firstNum)
            console.log(opX);
            break;
        case "%":
            total = eval((firstNum/100) *secondNum)
            console.log(opX)
        default:
            console.log(opX);
            break;
    }

    console.log(total)
    displayTotal(total)

}

function handleButton(e){
    //Allows the button clicked to join together
    numbersToCalculate.push(e.target.innerText)
    console.log(e)
    console.log(numbersToCalculate)
    document.getElementById("display").innerText = numbersToCalculate.join(" ")
}

function handleMemoryButton(e){
    // hand
    let ev = (e.target.innerText)   
    switch (ev){
        case "M+":
            memory(total)
            break;
        case "Mr":
            memoryReturn()
            break;
        default:
            memoryClear()
            break;
    }
     
}
