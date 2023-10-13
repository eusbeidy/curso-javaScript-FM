// // como definir una promesa

// const promesa = new Promise( (resolve, reject) =>{
//     // accion que se ejecute
//     setTimeout(() => {
//         const exito = false;

//       if (exito) {
//         resolve('la operacion tuvo exito');
        
//       } else {
//         reject('la operacion fracaso');
//       }
//     }, 4000);

// });
// promesa.then((mensaje) => {
//     alert(mensaje);
// });
// promesa.catch((mensaje) => {
//     alert(mensaje);
// });

//  ejemplo

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const posts = ['posts1', 'posts2', 'posts3'];
      const error = true;

      if (error) {
        reject('hubo un error')
      } else {
        resolve(posts)
      }

     }, 2000);
  });
}
fetchPosts().then((posts) =>{
  console.log(posts);

}).catch((error) => {
  console.log(error)
})