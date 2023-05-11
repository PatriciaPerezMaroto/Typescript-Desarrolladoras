export class Direccion{
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;

    constructor(calle: string, numero: number, piso: number; letra: string; codigoPostal: number; poblacion: string; provincia:string;) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    getCalle(): string{
        return this.calle;
    }
    setCalle(calle: string): void{
        this.calle = calle;
    }
    getNumero(): number{
        return this.numero;
    }
    setNumero(numero: number): void{
        this.numero = numero;
    }
    getPiso(): number{
        return this.piso;
    }
    setPiso(piso: number): void{
        this.piso = piso;
    }
    getLetra(): string {
        return this.letra;
    }
    setLetra(letra: string): void{
        this.letra = letra
    }
    getCodigoPostal(): number {
        return this.codigoPostal;
    }
    setCodigoPostal(codigoPostal: number): void{
        this.codigoPostal = codigoPostal 
    }
    getPoblacion(): string{
        return this.poblacion;
    }
    setPoblacion(poblacion: string): void {
        this.poblacion = poblacion
    }
    getProvincia(): string {
        return this.provincia;
    }
    setProvincia(provincia: string): void{
        this.provincia = provincia
    }

    mostrarDatos(): void{
        console.log('Calle: ', this.getCalle(), 'Numero: ', this.getNumero(), 'Piso: ', this.getPiso(), 'Letra: ', this.getLetra(), 'Codigo Postal: ', this.getCodigoPostal(), 'Poblacion: ', this.getPoblacion(), 'Provincia: ', this.getPoblacion())
    }

}