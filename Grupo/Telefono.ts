export class Telefono{
    tipo: string;
    numero: number;

    constructor(tipo: string, numero: number) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo(): string{
        return this.tipo;
    }
    setTipo(tipo: string): void{
        this.tipo = tipo;
    }
    getNumero(): number{
        return this.numero;
    }
    setNumero(numero: number): void{
        this.numero = numero;
    }
    mostrarDatos(): void{
        console.log('Tipo: ', this.getTipo(), 'Direccion: ', this.getNumero())
    }
}