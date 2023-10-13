/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

// const saludo = () => {

// 	console.log('hola')

// };

// let id;

// const iniciar = () => {
// 	console.log('iniciando timers')
// 	id = setTimeout( saludo, 5000); 
// };

// const parar = () => {
// 	console.log('parando timers');
// 	clearTimeout(id);
// }; 


/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/

let cuenta = 0;
let id;
const iniciar = () => {

	id = setInterval(() => {
		console.log(cuenta)
		cuenta++
	}, 1000);
};

const parar = () => {
	console.log('paramos la cuenta')
	clearInterval(id);


};


