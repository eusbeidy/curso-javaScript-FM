/*
	📌 Alerta
	Para informarle al usuario de algo.
*/

// alert('hola usuario');

/*
	📌 Ventana de confirmación
	Una ventana donde el usuario puede aceptar o cancelar.
	Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/

// const ingresar = () => {
//    const accesoPermitido = confirm('eres mayor de edad?');
//    if (accesoPermitido) {
//     alert('bienvenido');
    
//    } else {
//     alert('le vamos a decir a tus padres')
//    }

// };

/*
	📌 Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/

const saludo = () => {
    const nombre = prompt('Ingresa tu Nombre');
    alert(`BIENVENIDO ${nombre}`)
}