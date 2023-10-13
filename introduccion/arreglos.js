const arreglo = ['texto', 456.10, false, {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo)

const amigos = ['Alejandro', 'Manuel', 'cesar']
// para acceder a un dato de los arreglos y empiezan en la posicion cero 
console.log(amigos[1])


// como agregar elementos a un arreglo
const colores = [];

colores[0] = 'rojo';
colores[1]= 'azul';
colores[2]= 'verde';
colores[4]= 'blanco';



// sobre escribir los valores de un arreglo

colores[2]= 'amarillo';

console.log('la cantidad de colores son:',  +  colores.length)
// para agregar elementos con un metodo push
colores.push('azul')
console.log(colores)