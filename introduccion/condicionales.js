// aqui vamos a utilizar los operadores
/*operadores aritmeticos
= asignacion 
+ suma
- resta
* multiplicacion
/ division
% modulo
++ aumento
-- disminucion 
 */

// estructura de una condicional 

// ejemplo 1

/*const usuario = {
    edad: 17,
    pais: 'colombia',
    ticket: true,
};


if (usuario.edad > 17) {
    console.log('el usuraio es mayor de edad, puede entrar al concierto.');

} else{
    console.log('no puedes ingresar eres menor de edad')
}

*/

// ejemplo 2

//const usuario = {
    //edad: 19,
    //pais: 'colombia',
    //ticket: false,
//};

// && que se cumplan las dos codciones 
/*
if (usuario.edad >= 18 && usuario.ticket) {
    console.log('si es mayor de edad y tiene ticket de entrada')
} else {
    console.log('no es mayor de edad y no tiene ticket')
    
};
*/
//   ejemplo 3 anidando conciones 

// || que se cumpal una u otrade las condiciones 

/*if (usuario.edad >= 18 ) {
    if(usuario.ticket){
        console.log('el usuario es mayor de edad y tiene ticket')
    } else {
        console.log('el usuario  es mayor de edad pero no tiene ticket')
    }
} else {
    console.log('el usuario es menor de edad');
};
*/

// ejemplo 3  elseif usamos el mismo usuario
// de donde es el usuario

/*
if (usuario.pais === 'colombia') {
    console.log('el usuario es colombiano')
}else if (usuario.pais === 'mexicano') {
    console.log('el usuario es mexicano')
}else if (usuario.pais === 'espana') {
    console.log('el usuario nes de espana')
}else{
    console.log('el usuario es de otro pais')
} */





                 // CONDIONALES SWITCT 

// nos va permitir ejecutar codigo 



const usuario = {
    nombre: 'carlos',
    pais: 'mexico',

};

switch(usuario.pais){
    case 'mexico' :
        console.log('el usuario es mexicano');
        break;
    case 'colombia' :
            console.log('el usuario es colombiano');  
        break;
    case 'venezuela' :
        console.log('el usuario es venezolano'); 
         break;
    default: 
    console.log('el usuario es de otro pais');


}













































