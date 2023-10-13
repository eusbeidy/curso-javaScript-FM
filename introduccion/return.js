// las funciones deben encargarse de una sola cosa

let resultado;

const operacion = (tipo, nmr1, nmr2) => {
    if (tipo === 'suma') {
      resultado = nmr1 + nmr2;
    } else if (tipo === 'resta') {
      resultado = nmr1 - nmr2;
      
    }
    return resultado;
};

const miVariable= operacion('suma', 100, 11);
console.log(miVariable)
// repasar 
