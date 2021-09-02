/* //EJERCICIO 1 (TABLA DE MULTIPLICAR)

numero = prompt("ingresa un numero del 1 al 10");

function tablaMultiplicar(numero) {
  let resultado = `Tabla del ${numero}: \n`;

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;

    resultado += `${i} X ${numero} = ${multiplicacion} \n`;
  }
  return resultado;
}

console.log(tablaMultiplicar(numero));
 */

/* //EJERCICIO 2 (validar si es un palindromo o no)
 let texto = prompt("Ingresa un nombre para validar si es un palindromo o no");

function palindromo(texto) {
   let invertido = texto.split("").reverse().join("");
   return invertido === texto;
}

console.log("El texto ingresado es un palindromo?" + palindromo(texto));
  */

/* //EJERCICIO 3 (dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.La frase y palabra deben ser parametros de una funcion)
 
let frase = prompt("ingresa una frase para buscar coincidencias");
let busqueda = prompt("ingresa la palabra que deseas buscar");

function coincidencias(frase, busqueda) {
   let textoLimpio = frase.toLowerCase().replace(/[!¡?¿.,;-]/gi, "");

   let resultado = 0;

   if (textoLimpio.includes(busqueda)) {
      let palabras = textoLimpio.split(" ");
      let mapa = {};
      for (let palabra of palabras) {
         if (mapa[palabra]) {
            mapa[palabra]++;
         } else {
            mapa[palabra] = 1;
         }
      }

      resultado = mapa[busqueda];
   } else {
      resultado = 0;
   }

   return resultado;
}

console.log(
   "La cantidad de coincidencias dentro de la frase es: ",
   coincidencias(frase, busqueda)
); */

/* //EJERCICIO 4 (tomar un texto e invertirlo y guardarlo en una variable sin utilizar metodos propios del lenguaje (en este caso JS))

let texto = prompt('ingrese el texto que desea invertir.')

 function invertir(texto) {
   let invertido = "";

   for (let letra of texto) {
      invertido = letra + invertido;

   }
   return invertido;
}
console.log('El texto invertido es: ', invertir(texto));


// otra forma de hacerlo utilizando metodos del lenguaje

function invertir(texto) {
   return texto.split('').reverse().join('');
}
console.log('El texto invertido es: ', invertir(texto)); */

/* //EJERCICIO 5 (X % de X numero?)

let porcentaje = prompt('porcentaje que desea calcular');
let numero = prompt('numero')

function calcularPorcentaje(porcentaje, numero) {
   let operacion = ((porcentaje * numero) / 100);
   resultado = `El ${porcentaje}% de ${numero} es: ${operacion}.`;
   return resultado;
};

console.log(calcularPorcentaje(porcentaje, numero)); */

/* //EJERCICIO 6 (dibujar un cuadrado hueco con asteriscos.)

function side(number) {
   let side = "";

   for (let i = 0; i < number; i++) {
      side += "*";
   }
   return side;
}

function square(number) {
   let draw = side(number) + "\n";
   let content = "";

   for (let i = 2; i < number; i++) {
      content = "*";

      for (let x = 2; x < number; x++) {
         content += " ";
      }

      content += "*";
      draw += content + "\n";

   }

   draw += side(number);

   return draw;
}

console.log(square(8)); */

/* //EJERCICIO 7 (Dado dos números, devolver cuantos numeros IMPARES hay entre ellos.)

let number1 = prompt("ingrese un numero");
let number2 = prompt("ingrese un segundo numero");

function oddNumber(number1, number2) {

   let accountant = 0;
   while (number1 < number2) {
      if (number1 % 2 !== 0) accountant++;
      number1++;
   }
   return accountant;
};

console.log(oddNumber(number1, number2)); */

//EJERCICIO 8 ()