function oldSchoolAdd() {
    // Function body
    console.log('Hey oldSchoolAdd')
    return 2 + 3
}
//syntaxes différentes mais fonctions similaires
const esNextAdd = () => { //le plus courant
    //Function body
    console.log('Hey esNextAdd')
    return 2 + 3
} 

/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns Sum of operande1 and operande2 or NaN if not defined
 */
const addition = (operande1, operande2) => {
    return operande1 + operande2
}

/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns 
 */
const multiplication = (operande1, operande2) => {
    return operande1 * operande2
}

/**
 * 
 * @param {number} value1 
 * @param {number} value2 
 * @returns 
 */
//Return the double the sum of 2 values
const doubleOfSum = (operande1, operande2) => {
    return multiplication(addition(operande1 + operande2), 2)
}

//Call a function
const resultOldSchool = oldSchoolAdd()
const resultEsNext = esNextAdd()

console.log(`And the result is ${resultEsNext}`)
console.log(`Addition vaut : ${addition(2, 3)}`)

let value = 3
const result = addition(value, 2)
console.log(`With variable result is ${result}`)
console.log(`Value vaut ${value}`)


const resultMultiplication = multiplication()
console.log(`Multiplication vaut ${multiplication(2, 2)}`)


const double = multiplication(addition(3, 2), 2) //another way to call a function
console.log(`Le double de la somme des valeurs est ${double}`)