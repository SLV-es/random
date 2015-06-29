var numero=Math.random();
var respuesta = ' MAYOR';

if (numero<=0.5) {
	respuesta = ' MENOR o igual';
}

console.log('\n' + numero + respuesta + ' que 0,5\n');