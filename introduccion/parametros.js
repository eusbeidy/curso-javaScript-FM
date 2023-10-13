// const saludo = (nombre= 'amigo') => {
//     console.log(`hola ${nombre}`);
// }
// saludo('carlos');

// MULTIPLES PARAMETROS

const operacion = (tipo, nmr1, nmr2) => {

      //console.log(nmr1 + nmr2);
      if (tipo === 'suma') {
        console.log(nmr1 + nmr2);
      } else if (tipo === 'resta') {
        console.log(nmr1 - nmr2);
        
      }
};

operacion('suma', 100, 100);
operacion('resta', 100, 200);
