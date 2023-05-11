import { Persona } from './Grupo/Persona';
import { Direccion } from './Grupo/Direccion';
import { Telefono } from './Grupo/Telefono';
import { Mail } from './Grupo/Mail';

//Persona 1 (EJEMPLO1)
const persona1 = new Persona('Patricia', 'Perez Maroto', 25, '50484816J', '24/05', 'verde', 'mujer', [new Direccion ('Calle Escudo de Oro', 9, 1, 'D', 28054, 'Madrid', 'Madrid')],[new Mail('Personal', 'patt.perez@outlook.es')], [new Telefono('movil', 662692083)], 'Ninguna')

//Persona 2 (EJEMPLO2)
const persona2 = new Persona('Javier', 'Perez Martin', 56, '50585815Y', '01/08', 'marron', 'hombre', [new Direccion('AvenidaPatrimonio de la Humanidad', 9, 1, 'C', 28044, 'Madrid', 'Madrid')], [new Mail('Personal', 'j.p.perez@outlook.es')], [new Telefono('movil', 629332647)], 'Llamar para emergencias')

//Persona 3 (EJEMPLO3)
const persona3 = new Persona('JuanManuel', 'Rojas Rodríguez', 27, '50505857P', '01/12', 'negro', 'hombre', [new Direccion('Avenida Blas Cabrera', 39, 3, 'D', 28043, 'Madrid', 'Madrid')], [new Mail('Personal','jmrr112@gmail.com')], [new Telefono('movil', 662692763)], 'Poner primer contacto')

// Datos Personales
console.log('Datos Personales: ');
console.log(persona1);
console.log(persona2);
console.log(persona3);


const arrayPersonas: Persona[] = [persona1, persona2, persona3];
const dniBusqueda: string = '50354816L';

const direccionModificada = new Direccion(
    "Calle Casa Mila", 5, 3, 'C',28054, 'Leganes', 'Madrid'
)
const personaModificada: Persona = arrayPersonas.find(persona => persona.dni === dniBusqueda) as Persona;
const mailModificado = new Mail(
    "Personal", "yolandamaroto@gmail.com"
)
const telefonoModificado = new Telefono(
    "Movil", 662692734
)
personaModificada.mostrarDatos();
personaModificada.mostrarDatos();
personaModificada.mostrarDatos()

console.log('Datos Personales modificados; ');
console.log(persona1);
console.log(persona2);
console.log(persona3);