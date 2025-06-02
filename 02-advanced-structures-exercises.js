console.log("\n\nEjercicio 1")
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let palabras = ["pajaro", "cambio", "amigo"]

let palabras_map = palabras.map(element => element + "s")
console.log(palabras_map)

let palabras_filter = palabras.filter(element => element.includes("m") ? element : "")
console.log(palabras_filter)

let palabras_reduce = palabras.reduce((result, current) => result +" "+current)
console.log(palabras_reduce)

console.log("\n\nEjercicio 2")
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numeros = [1, 2, 3, 4]

let numeros_cubo_even = numeros.map(element => element*element*element).filter(element => element % 2 === 0)
console.log(numeros_cubo_even)

console.log("\n\nEjercicio 3")
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let array = ["Hola", ["mundo", ["!!!"]]]
let flat_array = array.flat(1)
console.log(flat_array)
let flat_array2 = array.flat(2)
console.log(flat_array2)
let flat_array3 = array.flat(3)
console.log(flat_array3)

console.log("\n\nEjercicio 4")
// 4. Ordena un array de números de mayor a menor
let array_sort = numeros.sort((a,b) => b - a)
console.log(array_sort)

console.log("\n\nEjercicio 5")
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let setA = new Set([2, 3, 5, 7])
let setB = new Set([1, 3, 5, 7, 8])

let union = new Set([...setA, ...setB])
console.log(union)
let intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)
let difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

console.log("\n\nEjercicio 6")
// 6. Itera los resultados del ejercicio anterior
union.forEach(element => console.log(element))

intersection.forEach(element => console.log(element))

difference.forEach(element => console.log(element))

console.log("\n\nEjercicio 7")
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let my_map = new Map([
    ["nombre", "Héctor"],
    ["edad", 30],
    ["email", "correo"],
], [
    ["nombre", "Iván"],
    ["edad", 28],
    ["email", "correo1"],
], [
    ["nombre", "Ana"],
    ["edad", 17],
    ["email", "correo3"],
]
)

my_map.forEach((value, key) => console.log(`${key}: ${value}`))

console.log("\n\nEjercicio 8")
// 8. Dado el mapa anterior, crea un array con los nombres
let array_nombres = []
my_map.forEach((value, key) => array_nombres.push(value))

console.log(array_nombres)

console.log("\n\nEjercicio 9")
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let array_correos = []
const map_transformado = Array.from(my_map)
//my_map.forEach()

console.log(array_correos)

console.log("\n\nEjercicio 10")
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
