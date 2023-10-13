document.getElementById('boton1').addEventListener('click', (e) => {
   const nombre = prompt('Escribe tu nombre');
   window.localStorage.setItem('nombre', nombre)

});

document.getElementById('boton2').addEventListener('click', () => {
    window.localStorage.removeItem('nombre');
});

 if (window.localStorage.nombre) {
    console.log('hola', window.localStorage.nombre);
    
 } else {
    console.log('no ingresaste ningun nombre');
 }

