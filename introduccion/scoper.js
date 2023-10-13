// scope global o a,bito de las variables
//    - son las variables declaradas fuera de una function
//    - podemos acceder a ellas desde cualquier parte del codigo
//    - podemos usar const, let, o var

// var nombre = 'eus';
// const saludo = () => {
//     console.log('hola ' + nombre)
//     nombre = 'arturo';
//     console.log('el nuevo nombre es ' + nombre)
// };
// saludo();

// scope local son las que estan dentron de una funcion y solo se pueden usar dentro de la funcion


var obtenerNmr = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`)
};
 obtenerNmr('eus')