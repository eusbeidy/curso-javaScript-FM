const personaArreglo = ['carlos', 27, 'carlos@gmailcom', true, true];
//propiedad valor

const persona = {
    nombre: 'carlos',
    edad: 27,
    correo: 'carlos@gmailcom',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['negro', 'rojo'],
    saludo: function() {
        alert('hola')
    },


};

// formas para acceder a losn valores de los obejetos 

//console.log(persona.nombre);
//console.log(persona['edad'])

const variable = 'suscripciones';
//console.log(persona[variable]);

//console.log(persona.suscripciones.correo);
 
//  PARA AGREGAR VALORES A UN OBJETO

persona.pais= 'mexico';
//console.log(persona)
 // sobre escribir valores
persona.pais= 'espana';
console.log(persona)


// como accerder a una funcion dentro de un objeto se les llama metodo

persona.saludo(persona)


















