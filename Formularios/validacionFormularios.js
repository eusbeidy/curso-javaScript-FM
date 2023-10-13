const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // paso uno acceder a los valores del formulario y los podemos guardar en una  o un objeto

   const datos = {
     correo: formulario.correo.value,
     pais: formulario.pais.value,
     donacion: formulario.donacion.value,
     fecha: formulario.fecha.value,
     terminos: formulario['terminos-y-condiciones'].checked,

   };
// comprobando el correo

   if (datos.correo <= 2) {
    console.log('correo invalido');
    return;
   }

   // comprobando pais

   if (datos.pais === '') {
    console.log('pais invalido');
    return;
    
   }
   if (datos.donacion === '' ) {
    console.log('no seleccionaste ninguna opcion')
    return;
    
   }

   if (datos.fecha === '') {
    console.log('no ingresaste ninguna fecha')
    return;
    
   }

   if (datos.terminos === false) {
     console.log('debes aceptar terminos y condiciones')
    
   }
  

 console.log(datos)
 console.log('enviando datos')
});
