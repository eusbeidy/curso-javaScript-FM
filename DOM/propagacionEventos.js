const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('hiciste click en el contenedor')

});


const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    // esto solo se ejecuta en elementos hijos
   // e.stopPropagation();
    console.log('hiciste click en la primera caja')
});

