// que tipo de voleto tiene el usuario 

const voleto = 'vip';
//let codigoAcceso; 
/* if (voleto === 'vip') {
    codigoAcceso = 'VIP-123'
 } else {
    codigoAcceso = 'REGULAR-456'
 } */

const codigoAcceso = (voleto === 'vip') ? 'VIP-123' : 'REGULAR-456';

//console.log(codigoAcceso)

voleto === 'vip' ? console.log('tu voleto en vip') : console.log('tu voleto en vip')