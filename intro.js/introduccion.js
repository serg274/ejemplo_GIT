/*var nombre = "analia";
console.log(nombre);
// var nombre = prompt("ingrese su nombre");
//document.write("Hola sergio");
var num1;
var num2 = 2;
console.log(num2 + num1)*/

// var divicion = 6 / 8;
// console.log(divicion);

/* var librosComprados = 0;
//opcion contador
librosComprados = librosComprados + 1;
console.log(librosComprados);

//opcion 2 con contador de incremento
librosComprados++;
console.log(librosComprados);


var sumaNotoas;

var sumaNotoas = 80;

 sumaNotoas = sumaNotoas + 75;
  sumaNotoas  += 75;

sumaNotoas = sumaNotoas + 60;
console.log(sumaNotoas) */
/******************************************************************************************** */

//--------------------Ejercicios ----------------
// De clase 5:

/* Ejercicios estructura secuencial
1. mostrar el mensaje “Hola Juan”.
2. Ingresar dos números y mostrar la suma y la diferencia.
3. Ingresar el monto de una factura y calcular el IVA (21%).
4. Calcular el promedio de las notas que obtiene un alumno al rendir los dos parciales
5. Tres personas invierten dinero para fundar una empresa (no necesariamente en partes
iguales). Calcular qué porcentaje invirtió cada una.  */

//1)
/* var nombre = "hola juan";
console.log(nombre); */
//-----------------------------------------
//2)
/* var num1 = 2;
var num2 = 6;
console.log(num1 + num2); // 8.
console.log(num1 - num2); // -4 */
//------------------------------------------
//3)
/* //var montoFactura = prompt("Ingrese monto de la factura");
var montoFactura = montoFactura * 0.21; // a 21 se lo divide por 100 == 0.21%
console.log(montoFactura); // de 100 == 21. */
//--------------------------------------------
//4)se usa parint o partfloat
/* var nota1 = 10;
var nota2 = 9;
nota1 = prompt("Ingrese nota primer parcial");
nota2 = prompt("Ingrese nota segundo parcial"); 
var suma = number(nota1) + nota2;
var promedio = suma / 2;
console.log(+promedio); */
//CORREGIR!!!
//----------------------------------------------
//5)
/* var persona1 = parseInt(prompt("ingrese valor de inversion 1"));
var persona2 = parseInt(prompt("ingrese valor de inversion 2"));
var persona3 = parseInt(prompt("ingrese valor de inversion 3"));

var sumaTotal = persona1 + persona2 + persona3;
var porc1, porc2, porc3;

porc1 = (persona1 * 100) / sumaTotal;
porc2 = (persona2 * 100) / sumaTotal;
porc3 = (persona3 * 100) / sumaTotal;


console.log(sumaTotal);
console.log(porc1);
console.log(porc2);
console.log(porc3); */
//-------------------------------------------------------
//-----------------------------------------
//ACLARACION DE parsetInt y Number.

/* console.log(Number('a')); // NaN
console.log(Number('1')); // 1
console.log(Number('5e2')); // 500
console.log(Number('16px')); // NaN
console.log(Number('3.2')); // 3.2

console.log(parseInt('a')); // NaN
console.log(parseInt('1')); // 1
console.log(parseInt('5e2')); // 5
console.log(parseInt('16px')); // 16
console.log(parseInt('3.2')); // 3 */
//-----------------------------------------
//plantillas literales ( `` ) y uasando interpolacion
/* var nombre = "Alan";
var edad = 31;
var cadena = "en Javascript"
var mensaje = `soy ${nombre} y tengo ${edad} años. `;
mensaje += cadena */
/**
cadena: J a v a s r i p t
indice: 1 2 3 4 5 6 7 8 9
 */

/* 
console.log(cadena[3]);
console.log(mensaje);
console.log(cadena.length); */

/**
//-----------------ejercitacion clase1 18 -------------------------------------------------

//1)Ejercicios 1
/* Calcular la cantidad de segundos que están incluidos en el número de horas, minutos y
segundos ingresados por el usuario. */
/* var horas = Number(prompt("Ingrese hora"));
var minutos = Number(prompt("Ingrese minutos"));
var segundos = Number(prompt("Ingrese segundos"));

var sumador = (horas * 3600) + (minutos * 60) + segundos

console.log(`En ${horas} hora, y ${minutos} minutos, son un total de ${sumador} segundos.`) */
//------------------------------------------------------------------------------------------------
/***************************  Math.pow(base, exponente) *****************************************/
/**************************** Math.pow(7, 2 ) == 49  ********************************************/
/* Ejemplo: Usando Math.pow()
// simple
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024
// exponentes fraccionales
Math.pow(4, 0.5);  // 2 (raíz cuadrada de 4)
Math.pow(8, 1/3);  // 2 (raíz cúbica de 8)
Math.pow(2, 0.5);  // 1.412135623730951 (raíz cuadrada de 2)
Math.pow(2, 1/3);  // 1.2599210498948732 (raíz cúbica de 2)
// exponentes con signo
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5
// bases con signo
Math.pow(-7, 2);   // 49 (los cuadrados son positivos)
Math.pow(-7, 3);   // -343 (El cubo de una base negativa puede ser negativo)
Math.pow(-7, 0.5); // NaN (Los números negativos no tienen raíz cuadrada real)
Math.pow(-7, 1/3); // NaN */
/*******************************************************************************************************/
//2)Ejercicio 2
/* Hacer un programa para ingresar el radio de un círculo y se reporte su área y la longitud de
la circunferencia. */

/* const pi = 3.1416;

var radio = Number(prompt("Ingrese Num de radio: "));
var area = Math.pow(radio, 2) * pi; //podria a ver sido == Math.PI
var longitud = radio * 2 * pi;      //podria a ver sido == Math.PI

console.log(`El area es: ${area} y su longitud: ${longitud}`); */
//-------------------------------------------------------------------------------
//3)Ejercicio 3
/* Desarrollar un algoritmo que, dados el valor de una hora de trabajo y la cantidad de horas
trabajadas por día, calcule y muestre el valor del sueldo semanal, asumiendo que se
trabajan todos los días hábiles y media jornada los sábados. Ejemplo: Ingresa 120 y 8, debe
devolver 5280. */

/* var valorHora = parseInt(prompt("Ingrese valor hora"));
var horas = parseInt(prompt("Ingrese horas trabajadas por dia"));

var ganancia = horas * valorHora * 5 + (horas / 2) * valorHora;
var mes = (ganancia * 20) - (horas / 8);
console.log(`El sueldo semanal es : ${ganancia} y mensual es : ${mes}`); */
//----------------------------------------------------------------------------------
/* Ejercicio 4
Un profesor prepara tres cuestionarios para una evaluación final: A, B y C. Se sabe que se
tarda 5 minutos en revisar el cuestionario A, 8 en revisar el cuestionario B, y 6 en el C. La
cantidad de exámenes de cada tipo se entran por teclado. ¿Cuántas horas y minutos se
tardará en revisar todas las evaluaciones? */

/* var cuestioA = parseInt(prompt("Ingrese cantidad de cuestionarios A"));
var cuestioB = parseInt(prompt("Ingrese cantidad de cuestionarios B"));
var cuestioC = parseInt(prompt("Ingrese cantidad de cuestionarios C"));

var tiempoA = 5;//minutos
var tiempoB = 8;//minutos
var tiempoC = 6;//minutos

minTotales = (cuestioA * tiempoA + cuestioB * tiempoB + cuestioC * tiempoC);
horas = minTotales / 60;
minutos = minTotales % 60;
console.log(`Se tardara en revisar todas las evaluaciones horas ${Math.round(horas)} y minutos ${minutos} .`) */
//------------------------------------------------------------------------------------------------------------------------
/* Ejercicios 5
Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea
saber cuánto deberá pagar finalmente por su compra. */

/* var precio = parseInt(prompt("Ingrese precio"));
var descuento = precio * 0.85;// 15%
var precioFinal = descuento;

console.log(`total a pagar $${Math.round(precioFinal)} , que tenga un buen dia.`); */
//------------------------------------------------------------------------------------------------------------------------------
/* Ejercicio 6
Un alumno desea saber cuál será su calificación final en la materia Introducción a la
Programación. Dicha calificación se compone de los siguientes porcentajes:
● 55% del promedio de sus tres calificaciones parciales.
● 30% de la calificación del exámen final.
● 15% de la calificación de un trabajo final. */

/* var alumno = prompt("Nombre del alunmo: ");

var parcialA = parseInt(prompt("Ingrese nota A"));
var parcialB = parseInt(prompt("Ingrese nota B"));
var parcialC = parseInt(prompt("Ingrese nota C"));
var promedio = (parcialA + parcialB + parcialC) / 3;

var examenFinal = parseInt(prompt("Ingrese Nota Examen"));
var trabajoFinal = parseInt(prompt("Ingrese Nota Trabajo Final"));

var promediPorcentaje = (promedio * 55) / 100;
var porcentajeExamen = (examenFinal * 30) / 100;
var trabajoFinal = (trabajoFinal * 15) / 100;

var calificacionFinal = trabajoFinal + promediPorcentaje + porcentajeExamen;

console.log(`Nota Final del alumno ${alumno} es: ${calificacionFinal}`); */
// *************************** fin clase 17 - 18 *************************************

//**********------------ clase 19 --------------********************** */
/* 
var miArreglo = [80, 56, 75];
var listaEstudiantes = [["nora", 97], ["gino", 78], ["emily,56"]];

console.log(miArreglo);
console.log(listaEstudiantes[1][1]);//78
console.table(listaEstudiantes);//78 */
//------------------------------------------------
//---------ejercicio 1 -------------------------
/* var num1 = Number(prompt("Ingrese un numero 1 "));
var num2 = Number(prompt("Ingrese un numero 2 "));

if (num1 % 2 == 0) {
  console.log("el numero es par");
} else{
    console.log("El numero es impar")
  } */
//-------------------------------------------------

/* var nota1 = parseInt(prompt("Ingrse nota 1"));
var nota2 = parseInt(prompt("Ingrse nota 2"));
var nota3 = parseInt(prompt("Ingrse nota 3"));
var promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 70) {
  console.log("aprobado")
} else {
  console.log("No aprobo")
} */
//-----------------------------------------------
/* var descuento = 0.20;
var montoFactura = parseFloat(prompt("Ingrese total de la compra"));
var total;


if (montoFactura >= 100) {
  total = montoFactura - (montoFactura * descuento);
  console.log(`usted tiene un ${total} que pagar`)
} else {
  console.log("usted devera pagar el total");
} */
//--------------ejerc 4 --------------------------
/* var num1 = parseInt(prompt("ingrese num 1 "));
var num2 = parseInt(prompt("ingrese num 2 "));

var multiplicacion, suma, resta;

if (num1 == num2) {
  multiplicacion = num1 * num2;
  console.log(multiplicacion);
} else if (num1 > num2) {
  resta = num1 - num2;
  console.log(resta);
} else {
  suma = num1 + num2;
  console.log(suma);
} */
//-----------------------------------------------
//----------ejerc 5 -----------------------------
/* var num1 = parseInt(prompt("Ingrese num 1 "));
var num2 = parseInt(prompt("Ingrese num 2 "));
var num3 = parseInt(prompt("Ingrese num 3 "));

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num3 && num1 < num2) {
  console.log(num2);
} else if (num3 > num2 && num3 > num1) {
  console.log(num3);
} else {
  console.log("dos de los numeros son iguales");
}
 */
//-------------------------------------------------
//------------ejerc 6 -----------------------------

//--------------Ejercicios clase 8 ---------------------------

//-----------ejerc 2 -------------------------------------
/* //Hacer un programa que tenga un menú con las siguientes opciones: 
Opción 1: Elevar un número a una potencia X 
Opción 2: Sacar la raíz cuadrada de un número 
Opción 3: Salir */

/* var potencia, raiz;
var num = parseInt(prompt("Ingrese un numero"));
if (num >= 0 || num <= 0) {
  console.log("Menu de operaciones");
  console.log("1: Elevar un número a una potencia X");
  console.log("2: Sacar la raíz cuadrada de un número");
  console.log("3: Salir.");
  var opcion = parseInt(prompt("Ingrese la  opcion "));

  switch (opcion) {
    case 1:
      var num2 = parseInt(prompt("Ingrese la potencia"));
      potencia = Math.pow(num, num2);
      console.log(`El numero ${num}  elevado ^ ${num2}, es = ${potencia}`);
      break;
    case 2:
      raiz = Math.sqrt(num);
      console.log(`La raiz cuadrada de ${num} es = ${raiz} `);
      break;
    case 3:
      console.log("exit");
      break;
    default:
      prompt("Por favor verifique e ingrese la opcion correcta");
      break;
  }
} else {
  console.log("Ingrese Numero por favor !!");
} */
//---------------------------------------------------------------------------------------
//------------------------ejerc 3 ----------------------
/*  Ejercicio 3: 
Una empresa prestadora de servicios de internet necesita un algoritmo que permita realizar el cálculo del monto a pagar de la factura de consumo de internet de 5 clientes de una empresa. Para ellos, el programa debe solicitar por teclado dos datos: DNI cliente, y tipo de servicio.
Los tipos de servicio son 3:
1. Internet 30 megas (valor de $750 - 10% de descuento)
2. Internet 50 megas (valor $930 - 5% descuento)
3. Internet 100 megas (valor fijo de $120)
 */
/* ñ */
//----------------------------------------------------------------

/*  Ejercicio 4: 
En una fábrica donde sus empleados pueden trabajar a la mañana, tarde, o noche. Depende el turno que trabajan, van o no, a recibir un extra en su sueldo (un plus). En cada turno se desea conocer las horas trabajadas, el sueldo por hora para calcular el sueldo básico. Teniendo en cuenta esto, el plus que recibirá en cada turno son los siguientes.
● turno mañana: no recibe plus. 
● turno tarde: recibe %20 de aumento. 
● turno noche: recibe %40 de aumento.
Mostrar por pantalla el sueldo final que recibe el empleado, según el turno que trabaje.
 */
/* var turno = prompt("Ingrese turno"); 
// var hora = hora * diasTrabajados;
var hora = 100 * 8;

var manana, tarde, noche;

switch (turno) {
  case "mañana":
    console.log(`no recibe plus, ${hora}, hora normal`);
    break;

  case "tarde":
    tarde = (tarde * 20 / 100) + hora;
    console.log(`El turno tarde recibe ${hora} + ${tarde}`);
    break;

  case "noche":
    noche = noche * 1.40;
    console.log(`El turno de la noche recibe ${noche}`);
    break;
  default:
    break;
} */
/* var turno = prompt("Ingrese su turno de trabajo:  mañana, tarde, noche");
var mañana, tarde, noche;
var valorHora = 100;
var diasTrab = 26;
var horaT = 8;

switch (turno) {
  case "mañana":
    var total = horaT * valorHora * diasTrab;
    console.log("el turno mañana recibe $" + total + " y no tiene plus");
    break;

  case "tarde":
    var total = horaT * valorHora * diasTrab;
    var totalF = total * 1.2;
    console.log("el turno tarde recibe $" + totalF);
    break;

  case "noche":
    var total = horaT * valorHora * diasTrab;
    var totalF = total * 1.4;
    console.log("el turno mañana recibe $" + totalF);
    break;

  default:
    console.log("Ingrese Turno Valido");
    break;
} */
//-----------------------------------------------------------------------------
//sistema while:
/* var numeros = [2, 3, 4, 5, 6, 8, 34];

while (numeros.length > 4) {
  numeros.pop();
};

console.log(numeros) */
//--------------------------------------
/* var num = 0;

while (num < 4) {
  num++;
  console.log(num);
} */
//---------------------------10--1--------------------------------------
/* let n = 10; // número de elementos a sumar
let suma = 0; // variable para almacenar la suma
let i = 1; // contador

while (i <= n) {
  suma += i;
  i++;
}
console.log(`la suma de los ${n} primeros numeros es: ${suma}`); */
//----------------------------10--2---------------------------------------
/* let sumaPares = 0; // variable para almacenar la suma de los números pares
let sumaImpares = 0; // variable para almacenar la suma de los números impares

// Ciclo para sumar los números pares
for (let i = 2; i <= 50; i += 2) {
  sumaPares += i;
}

// Ciclo para sumar los números impares
for (let i = 1; i <= 49; i += 2) {
  sumaImpares += i;
}

// Imprimir los resultados
console.log(`La suma de los números pares entre 1 y 50 es: ${sumaPares}`);
console.log(`La suma de los números impares entre 1 y 50 es: ${sumaImpares}`); */
//---------------------------------10 --3 ----------------------------
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
//----------------------------
//----------------------------- 11 -- 1 -------------------------------------------

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

//-------------------------------------11 -- 2 ----------------------------------------
/* let num1 = parseInt(prompt("Ingrese numero 1"));
let num2 = parseInt(prompt("Ingrese numero 2"));
let operacion;
if (operacion === "+") {
  num1 + num2;
}else if() */

//------------------con un while  11-1 -----------------------------------------------
/* let variable1 = 5;
let variable2 = 12;

console.log("Antes del intercambio:");
console.log("Variable 1: ", variable1);
console.log("Variable 2: ", variable2);

while (variable1 != variable2) {
  if (variable1 < variable2) {
    let temp = variable1;
    variable1 = variable2;
    variable2 = temp;
  }
  variable1--;
  variable2++;
}

console.log("Después del intercambio:");
console.log("Variable 1: ", variable1);
console.log("Variable 2: ", variable2); */
//---------------------------------------------------------------------------------
/*
          EXPLICACION DE ELEGIR QUE BUCLE UTILIZAR
          La elección entre un bucle for, while o do while dependerá de las necesidades y características del problema que se esté intentando resolver. A continuación te dejo algunas recomendaciones que pueden ayudarte a elegir el tipo de bucle más adecuado:

for: es útil cuando se sabe de antemano la cantidad de veces que se va a repetir el código. Por ejemplo, si se quiere iterar sobre un arreglo de longitud conocida, se puede utilizar un for.

while: es adecuado cuando no se sabe exactamente cuántas veces se debe repetir el código, sino que se tiene una condición que se debe cumplir para seguir iterando. Por ejemplo, si se quiere leer números hasta que el usuario introduzca un número negativo, se puede utilizar un while.

do while: es similar al while, pero se ejecuta al menos una vez antes de evaluar la condición. Es útil cuando se necesita ejecutar un código al menos una vez, independientemente de si se cumple o no una condición. Por ejemplo, si se quiere leer un número del usuario y verificar si es positivo o negativo, se puede utilizar un do while.

En resumen, el tipo de bucle que se utilice dependerá de la necesidad específica del problema que se esté intentando resolver.
 */
//----------------------------------------------------------------------------

/* let a = parseFloat(prompt("Ingrese Num1"));
let b = parseFloat(prompt("Ingrese Num2"));

if (a > b) {
  // código que se ejecuta si cumple la condición.
  console.log(b + a);
} else {
  // código que se ejecuta si NO se cumple la condición.
  console.log(a / b);
} */

