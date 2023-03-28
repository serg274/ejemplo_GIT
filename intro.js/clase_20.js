//-----------------------------BUCLES Y ARRAYS --------------------------------------

/* EJERCITACION CLASE 10  */
//1. Calcular la suma de los N primeros números.
/* let n = 10;
let i = 1;
let suma = 0;

while (i <= n) {
  suma += i;
  i++;
}
console.log(suma); */ //salida 55
//----------------------------------------------------------------------

//2. Se desea calcular independientemente la suma de los números pares e impares
/* comprendidos entre 1 y 50. Es decir:
suma_pares = 2 + 4 + 6 + … + 48
suma_impares = 3 + 5 + 7 + … + 49 */

/* let suma_pares = 0;
let suma_impares = 0;

for (let i = 2; i < 50; i += 2) {
  suma_pares += i;
}

for (let i = 1; i <= 49; i += 2) {
  suma_impares += i;
}
console.log(
  `La suma de pares es: ${suma_pares} y la suma de impares es : ${suma_impares}`
); */
//------------------------------------------------------------------------------

//3. Leer 10 números e imprimir cuantos son positivos, cuantos negativos y cuantos neutros.

/* let positivos = 0;
let negativos = 0;
let neutros = 0;

for (let i = 1; i <= 10; i++) {
  let numero = prompt(`Introduce el número ${i}:`);

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  } else {
    neutros++;
  }
}

console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Neutros: ${neutros}`); */
//--------------------------------------------------------------------------------------
//----------EJERCITACION CLASE 11 ----------------

/* 1. Desarrolle un algoritmo que permita intercambiar el valor de dos variables. Por
ejemplo, si la variable1 vale 5 y la variable2 vale 12, hacer que la variable1 valga 12
y la variable2 valga 5. Tener en cuenta que al asignar un valor a una variable se
sobreescribe el valor anterior */

/* let variable1 = 5;
let variable2 = 12;

console.log("Antes del intercambio:");
console.log("Variable 1: ", variable1);
console.log("Variable 2: ", variable2);

let temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log("Después del intercambio:");
console.log("Variable 1: ", variable1);
console.log("Variable 2: ", variable2); */
//-----------------------------------------------------------------------------------------
/* 2. Un niño de primaria necesita realizar 5 cálculos diferentes entre dos números. Para
esto necesita un programa que, para cada cálculo, permite el ingreso de los dos
números por separado al igual que la operación que desea hacer entre ambos. Al
mismo tiempo debe poder realizar el cálculo en cuestión y mostrar el resultado por
pantalla.
Ejemplo:
Ingresa el primer número 25 y el segundo número 15. Luego ingresa
el operador para indicar la operación a realizar: +
Se requiere se resuelva de dos maneras por separado:
a. Con estructura condicional Si-Entonces.
b. Con estructura condicional Según-Hacer. */

/* let num1 = Number(prompt("Ingrese numero1"));
let num2 = Number(prompt("Ingrese numero2"));
let calculos = Number(
  prompt(
    `Ingrese la operacion a realizar ${1} (suma) ${2} (resta) ${3} (multiplicacion) ${4} (division) ${5} (potencia) `
  )
);
let suma, resta, multiplicacion, division, potencia;

switch (calculos) {
  case 1:
    console.log(num1 + num2);
    break;
  case 2:
    console.log(num1 - num2);
    break;
  case 3:
    console.log(num1 * num2);
    break;
  case 4:
    console.log(num1 / num2);
    break;
  case 5:
    console.log(Math.pow(num1, num2));
    break;

  default:
    console.log("La operacion no es valida");
    break;
} */
//-------------------------------------------------------------------------------------------------------------------------
/* let num1 = parseInt(prompt("Ingrese num1"));
let num2 = parseInt(prompt("Ingrese num2"));

let operador = prompt("Ingrese un operador");
let resultado;

if (operador === "+") {
  resultado = num1 + num2;
} else if (operador === "-") {
  resultado = num1 - num2;
} else if (operador === "*") {
  resultado = num1 * num2;
} else if (operador === "/") {
  resultado = num1 / num2;
} else if (operador === "^") {
  resultado = Math.pow(num1, num2);
} else {
  "Ingrese operador valido"
} if (resultado) {
  console.log(`El resultado es: ${resultado}`)
} */
//-------------------------------------------------------------
/* 3. Calcular si un año es bisiesto o no. Ejemplo: Ingreso el año de interés y me informa
si es/fue bisiesto o no */
/* let anio = parseInt (prompt("Ingrese el año"));

if ((anio % 4 == 0) && (anio % 100 != 0 || anio % 400 == 0)) {
  console.log("El año es bisiesto")
} else {
  console.log("El año no es bisiesto")
} */
//-------------------------------------------------------------
/* 4. Realizar un juego sencillo, donde el usuario tenga que adivinar un número. Es decir, el
programa tendrá un número declarado secreto, y el usuario tiene que ingresar números
hasta que lo adivine. */
/* let num = 2;
let adivina;

let num1 = parseInt(prompt("Ingresar un numero"));

if (num === num1) {
  adivina = num;
  console.log(`Lo has logrado el numero era: ${num}`);
} else {
  console.log(`Ingresa hasta que lo adivines, el numero ingresado es: ${num1}`);
} */
//--------------------------------------------------------------------------
/* 5. Desarrolle un algoritmo que permita leer tres valores. El algoritmo debe imprimir cual es
el mayor y cuál es el menor. Imprimir un mensaje de alerta en caso de que se detecte la
introducción de valores iguales. */

//CON CICLO IF
/* const a = parseInt(prompt("Ingrese el primer valor"));
const b = parseInt(prompt("Ingrese el segundo valor"));
const c = parseInt(prompt("Ingrese el tercer valor"));

if (a === b || b === c || a === c) {
  console.log("Alerta: Se han ingresado valores iguales");
}

if (a > b && a > c) {
  console.log(`El mayor valor es ${a}`);
} else if (b > a && b > c) {
  console.log(`El mayor valor es ${b}`);
} else {
  console.log(`El mayor valor es ${c}`);
}

if (a < b && a < c) {
  console.log(`El menor valor es ${a}`);
} else if (b < a && b < c) {
  console.log(`El menor valor es ${b}`);
} else {
  console.log(`El menor valor es ${c}`);
} */

//----------CON WHILE ----
/* let mayor, menor;
const a = parseInt(prompt("Ingrese el primer valor"));
const b = parseInt(prompt("Ingrese el segundo valor"));
const c = parseInt(prompt("Ingrese el tercer valor"));
let i = 0;

while (i < 3) {
  const x = i === 0 ? a : i === 1 ? b : c;

  if (mayor === undefined || x > mayor) {
    mayor = x;
  }

  if (menor === undefined || x < menor) {
    menor = x;
  }

  i++;
}

if (a === b || b === c || a === c) {
  console.log("Alerta: Se han ingresado valores iguales");
}

console.log(`El mayor valor es ${mayor}`);
console.log(`El menor valor es ${menor}`); */
//---------------------------------------------------------------------
/* 6. Desarrolle un algoritmo que realice la sumatoria de los números enteros
comprendidos entre el 1 y el 10, es decir, 1 + 2 + 3 + …. + 10. */

/* let sumatoria = 0;

for (let i = 1; i <= 10; i++) {
  sumatoria += i;
}

console.log(sumatoria); */

/* Declaramos la variable sumatoria y la inicializamos en 0.
Usamos un bucle for que se ejecuta desde i = 1 hasta i <= 10.
En cada iteración, sumamos el valor de i a la variable sumatoria.
Al final del bucle, imprimimos el resultado de la sumatoria en la consola con console.log(). */
//---------------------------------------------------------------------------
/* 7. Desarrolle un algoritmo que permita leer un valor cualquiera N y escriba si dicho
número es par o impar. */
/* let n = prompt("Introduce un número");

if (n % 2 == 0) {
  console.log(`${n} es par`);
} else {
  console.log(`${n} es impar`);
} */
/* Pedimos al usuario que introduzca un número utilizando prompt() y lo almacenamos en la variable n.
Utilizamos una estructura condicional if/else para determinar si el número es par o impar.
Si el número es divisible entre 2 (es decir, el residuo de n / 2 es 0), entonces es par y se imprime un mensaje en la consola que indica que n es par.
De lo contrario, el número es impar y se imprime un mensaje en la consola que indica que n es impar. */
//------------------------------------------------------------------------
/* 8. Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a
mayor */
/* let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

if (num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

console.log(`Los números ordenados de menor a mayor son: ${num1}, ${num2}`); */

/* Pedimos al usuario que introduzca dos números utilizando prompt() y los almacenamos en las variables num1 y num2.
Utilizamos una estructura condicional if para comparar los dos números. Si num1 es mayor que num2, intercambiamos los valores de num1 y num2 utilizando una variable temporal temp.
Finalmente, imprimimos un mensaje en la consola que muestra los números ordenados de menor a mayor utilizando la sintaxis de plantilla de cadenas (${variable}) para incluir las variables num1 y num2 en la cadena. */
//--------------------------------------------------------------------------------
/* 9. Desarrolle un algoritmo que lea un valor entero positivo N y determine si es primo o
no. */
/* let n = parseInt(prompt("Introduce un número entero positivo"));
let esPrimo = true;

if (n < 2) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  console.log(`${n} es un número primo`);
} else {
  console.log(`${n} no es un número primo`);
} */
/* Pedimos al usuario que introduzca un número entero positivo utilizando prompt() y lo almacenamos en la variable n.
Utilizamos una estructura condicional if para verificar si n es menor que 2. Si es así, n no se considera un número primo y establecemos la variable esPrimo en false.
Si n es mayor o igual que 2, utilizamos un bucle for para iterar desde 2 hasta la raíz cuadrada de n. Si n es divisible por algún número entre 2 y su raíz cuadrada (exclusivamente), entonces n no es un número primo y establecemos la variable esPrimo en false. De lo contrario, n es un número primo y esPrimo se mantiene en true.
Finalmente, imprimimos un mensaje en la consola que muestra si n es un número primo o no utilizando la sintaxis de plantilla de cadenas (${variable}) para incluir la variable n en la cadena. */
//-----------------------------------------------------------------------------
/* 10. Desarrolle un algoritmo que permita calcular Promedio de Notas; finaliza cuando N =
0. */
/* let suma = 0;
let cantidadNotas = 0;
let nota = parseInt(prompt("Ingresa una nota (0 para salir)"));

while (nota !== 0) {
  suma += nota;
  cantidadNotas++;
  nota = parseInt(prompt("Ingresa una nota (0 para salir)"));
}

if (cantidadNotas === 0) {
  console.log("No se ingresaron notas");
} else {
  let promedio = suma / cantidadNotas;
  console.log(
    `El promedio de las ${cantidadNotas} notas ingresadas es ${promedio}`
  );
} */
/* Creamos tres variables: suma (para almacenar la suma de todas las notas), cantidadNotas (para contar la cantidad de notas ingresadas) y nota (para leer cada nota que se ingresa).
Utilizamos un bucle while para leer cada nota hasta que se ingrese un 0. Dentro del bucle, añadimos la nota a suma, incrementamos cantidadNotas en 1 y leemos la siguiente nota.
Después de salir del bucle, verificamos si se ingresaron notas (es decir, si cantidadNotas es mayor que 0). Si no se ingresaron notas, imprimimos un mensaje indicando que no se ingresaron notas.
De lo contrario, calculamos el promedio dividiendo suma entre cantidadNotas y almacenamos el resultado en la variable promedio. Finalmente, imprimimos un mensaje que muestra la cantidad de notas ingresadas y el promedio utilizando la sintaxis de plantilla de cadenas (${variable}) para incluir las variables en la cadena. */
//-------------------------------------------------------------------------
/* 11. Desarrolle un algoritmo que dado el radio de un círculo, calcule el volumen de la
esfera correspondiente. */
/* const pi = 3.1416;
let radio = parseFloat(prompt("Ingresa el radio del círculo"));
let volumen = (4 / 3) * pi * Math.pow(radio, 3);

console.log(
  `El volumen de la esfera correspondiente al radio ${radio} es ${volumen.toFixed(
    2
  )}`
); */
/* Creamos una constante llamada pi que contiene el valor de la constante matemática π (aproximadamente 3.1416).
Leemos el valor del radio del círculo ingresado por el usuario utilizando el método prompt, y lo almacenamos en una variable llamada radio.
Utilizamos la fórmula para calcular el volumen de la esfera correspondiente al radio ingresado, y almacenamos el resultado en una variable llamada volumen.
Finalmente, utilizamos el método console.log para imprimir un mensaje que muestra el valor del radio ingresado y el volumen de la esfera correspondiente, utilizando la sintaxis de plantilla de cadenas (${variable}) para incluir las variables en la cadena. La función toFixed(2) se utiliza para mostrar el resultado con dos decimales. */
//---------------------------------------------------------------------------------
//------------EJERCICIOS CLASE 12 ----------------------
/* 1. Realice un programa en pseudocódigo que calcule el Suelto Neto que cobra un
empleado por mes, trabajando 8 horas de lunes a viernes, teniendo en cuenta que la
hora trabajada es de $1500 pesos, y que se le descuenta los aportes jubilatorios es
el 15% del sueldo bruto y el descuento de la obra social que es del 3%. Informar el
sueldo Neto.
 */
/* const sueldoHora = 1500;
const horasTrabajadas = 8 * 20; // 8 horas x 20 días trabajados en el mes
const sueldoBruto = sueldoHora * horasTrabajadas;
const aportesJubilatorios = sueldoBruto * 0.15;
const descuentoObraSocial = sueldoBruto * 0.03;
const sueldoNeto = sueldoBruto - aportesJubilatorios - descuentoObraSocial;

console.log(`El sueldo neto del empleado es: $${sueldoNeto}`); */
//-------------------------------------------------------------------
/* 2. Calcular el factorial de un número N que ingresa un usuario, este tiene que ser
mayor o igual a 0. El factorial de un número es una multiplicación iterativa
empezando desde el 1 y llegando al número que se ingresa. */

/* let num = parseInt(prompt("Ingrese un número entero: "));
let resultado = 1;

if (num >= 0) {
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  console.log(`El factorial de ${num} es ${resultado}`);
} else {
  console.log("El número ingresado no es válido.");
} */
//---------------------------------------------------------------
// EJERCICIOS CLASE 13 -------------------------
/* 1. Crear un arreglo de 10 posiciones y rellenarlo entre 0 y 9.
 */
/* let miArreglo = []; // Creamos un arreglo vacío

for (let i = 0; i < 10; i++) {
  miArreglo[i] = i; // Rellenamos el arreglo con valores del 0 al 9
}

console.log(miArreglo); // Mostramos el arreglo en la consola del navegador */
//-------------------------------------------------------------------------
/* 2. Del arreglo anterior (puedes copiar el código), informar los números pares. */
/* const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
} */
//---------------------------------------------------------------------
/* 3. Del arreglo anterior (puedes copiar el código), obtener la suma de todos sus elementos.
 */
/* let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

console.log(`La suma de los elementos del arreglo es:", ${suma}`); */
//------------------------------------------------------------------
/* 4. Del arreglo del ejercicio 1 (puedes copiar el código), obtener el promedio de todos sus
elementos. */
/* const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

const promedio = suma / arreglo.length;

console.log(`El promedio es: ${promedio}`); */
//---------------------------------------------------------------
/* 5. Del arreglo del ejercicio 1 (puedes copiar el código), tomar los datos y pasarlos a otro
arreglo con la misma dimensión, con el objetivo de tener una copia. */
/* let arreglo = [];
let copia = [];

for (let i = 0; i < 10; i++) {
  arreglo[i] = i;
}

for (let i = 0; i < arreglo.length; i++) {
  copia[i] = arreglo[i];
}

console.log("Arreglo original: " + arreglo);
console.log("Copia del arreglo: " + copia); */
//--------------------------------------------------------------------
/* 6. Buscar en internet las temperaturas estimadas que hizo/hará esta semana, que
contemple de lunes a domingo, cargarlas como usuario. Informar la temperatura
promedio. */
/* let temperaturas = [];
let totalTemperaturas = 0;
const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

for (let i = 0; i < diasSemana.length; i++) {
  let temp = parseFloat(
    prompt(`Ingrese la temperatura del día ${diasSemana[i]}: `)
  );
  temperaturas.push(temp);
  totalTemperaturas += temp;
}

let promedio = totalTemperaturas / temperaturas.length;

console.log(`La temperatura promedio de la semana es ${promedio.toFixed(2)}°C`); */
//------------------------------------------------------------
/* 7. Realizar un algoritmo que permita la carga de 5 números en un arreglo. Una vez
cargados, debe determinar cuál es el mayor de ellos. */
/* let numeros = [];
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt(`Ingrese el número ${i + 1}`));
  numeros.push(num);
}

let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log(`El mayor número es ${mayor}`); */
//--------------------------------------------------------------
//-----------------------F I N ----------------------------------
