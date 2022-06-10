// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var resp = [];
  for (let clave in objeto) {
    resp.push([clave, objeto[clave]]);
  }
  return resp;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for (var i=0; i < string.length; i++) {
    if (obj[string.charAt(i)] === undefined) {
      obj[string.charAt(i)] = 1;
    }    
    else {
      obj[string.charAt(i)] = obj[string.charAt(i)] + 1;
    }  
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var respMay = '';
  var respMin = '';
  for (var i=0; i < s.length; i++) {
    if (s.substring(i, i+1).toUpperCase() === s.substring(i, i+1)) {
      respMay = respMay + s.charAt(i);
    }
    else {
      respMin = respMin + s.charAt(i);
    }
  }
  return respMay + respMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var resp = ''; 
  const arrayCad = str.split(' ');
  for (var i=0; i < arrayCad.length; i++) {
    if (i>0) {
      resp = resp + ' ';
    }
    for (var x=arrayCad[i].length-1; x >= 0; x--) {
      resp = resp + arrayCad[i].charAt(x);
    }
  }
  return resp;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cad = numero.toString();
  var rev = '';
  for (var i=cad.length-1; i >= 0; i--) {
    rev = rev + cad.charAt(i);
  }
  if (cad === rev) {
    return 'Es capicua';
  }
  else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var a = Array.from(cadena);
  b = a.filter(function(item){return item !== 'a' && item !== 'b' && item !== 'c'});
  return b.toString().replaceAll(',', '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){return a.length - b.length});
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var i = 0;
  var x = 0;
  var resp = [];

  arreglo1.sort(function(a,b) {return a-b});
  arreglo2.sort(function(a,b) {return a-b});

  do{
    if (arreglo1[i] === undefined || arreglo2[x] === undefined) {
      i = arreglo1.length;
      x = arreglo2.length;
    }
    else if (arreglo1[i] > arreglo2[x]) {
      x++;
    } 
    else if (arreglo1[i] < arreglo2[x]){
      i++;
    }
    else if (arreglo1[i] === arreglo2[x]){
      resp.push(arreglo1[i]);
      i++;
      x++;
    }

  }while (i < arreglo1.length || x < arreglo2.length);
 
  return resp;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

