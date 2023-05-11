import{ Direccion } from './Direccion';
import{ Telefono } from './Telefono';
import{ Mail } from './Mail';

export class Persona{
    nombre: string;
    apellidos: string;
    dni: string;
    edad: number;
    cumpleaños: string;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[]
    telefonos: Telefono[]
    notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    getNombre(): string{
        return this.nombre;
    }
    setnombre(nombre: string): void{
        this.nombre = nombre;
    }
    getApellidos(): string {
        return this.apellidos;
    }
    setApellidos(apellidos: string): void{
        this.apellidos = apellidos;
    }
    getEdad(): number{
        return this.edad;
    }
    setEdad(edad: number): void{
        this.edad = edad;
    }
    getDni(): string{
        return this.dni;
    }
    setDni(dni: string): void{
        this.dni = dni;
    }
    getCumpleaños(): string{
        return this.cumpleaños;
    }
    setCumpleaños(cumpleaños: string): void{
        this.cumpleaños = cumpleaños;
    }
    getColorFavorito(): string {
        return this.colorFavorito;
    }
    setColorFavorito(colorFavorito: string): void{
        this.colorFavorito = colorFavorito;
    }
    getSexo(): string{
        return this.sexo;
    }
    setSexo(sexo: string): void{
        this.sexo = sexo;
    }
    getDirecciones(): Direccion[]{
        return this.direcciones;
    }
    setDirecciones(direcciones: Direccion[]): void{
        this.direcciones;
    }
    getMails(): Mail[]{
        return this.mails;
    }
    setMails(mails: Mail[]): void{
        this.mails;
    }
    getTelefonos(): Telefono[]{
        return this.telefonos;
    }
    setTelefonos(telefonos: Telefono[]): void{
        this.telefonos;
    }
    getNotas(): string{
        return this.notas;
    }
    setNotas(notas: string): void{
        this.notas;
    }
    mostrarDatos(): void{
        console.log('Nombre: ', this.getNombre(), 'Apellidos: ', this.getApellidos(), 'Edad: ', this.getEdad(), 'DNI: ', this.getDni(), 'Cumpleaños: ', this.getCumpleaños(), 'Color Favorito: ', this.getColorFavorito(), 'Sexo: ', this.getSexo(), 'Direcciones: ', this.getDirecciones(), 'Mails: ', this.getMails(), 'Telefono: ', this.getTelefonos(), 'Notas: ', this.getNotas());
    }
    busquedaDni(dni:string): boolean {
        return dni=== this.dni; 
    }

}