// 1. Crea una función que retorne a otra función
console.log("\n\nEjercicio 1")
function funcion_dentro_funcion (){
    function mensaje(){
        console.log("Hola, estoy devolviendo una función desde otra función")
    }
    return mensaje()
}

funcion_dentro_funcion()

console.log("\n\nEjercicio 2")
// 2. Implementa una función currificada que multiplique 3 números
function curry_multiply(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
const multyplyAB = curry_multiply(3)(2)
const multiplyC= multyplyAB(4)

console.log(multiplyC)
console.log(multyplyAB(3))

console.log("\n\nEjercicio 3")
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(numero, exponente){
    if(exponente == 0){
        return 1
    }
    return numero* potencia(numero, exponente-1)
}

console.log(potencia(3, 2))


console.log("\n\nEjercicio 4")
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(numero){
    let counter = numero

    return { 
        increment(){
            counter++
        },

        decrement(){
            counter--
        },

        getValue(){
            console.log(counter)
        }
    } 
}

const counter = createCounter(5)
counter.increment()
counter.decrement()
counter.decrement()
counter.getValue()
counter.increment()
counter.increment()
counter.getValue()

console.log("\n\nEjercicio 5")
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let resultado = 0
    for (let number of numbers){
        resultado += number 
    }
    return multiplier*resultado
}

console.log(sumManyTimes(2, 1,2,3,4,5))
console.log(sumManyTimes(4, 1,2,5))

console.log("\n\nEjercicio 6")
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function principal(callback, ...numbers){
    let resultado= 0
    for(let number of numbers){
        resultado += number
    }
    
    callback(resultado)
}

function mostrar_resultado(resultado){
    console.log("Mi resultado es " +resultado)
}

principal(mostrar_resultado, 1,2,3,4,5)
principal(mostrar_resultado, 1,3,4,5)

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico