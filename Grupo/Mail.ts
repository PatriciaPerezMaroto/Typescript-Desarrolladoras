export class Mail {
    tipo: string;
    direccion: string;

    constructor(tipo: string, direccion: string){
        this.tipo = tipo;
        this.direccion = direccion;
    }
    getTipo(): string {
        return this.tipo;
    }
    setTipo(tipo: string): void{
        this.tipo = tipo;
    }
    getDireccion(): string {
        return this.direccion;
    }
    setDireccion(direccion: string): void{
        this.direccion = direccion;

    }
    mostrarDatos(): void{
        console.log('Tipo: ', this.getTipo(), 'Direccion: ', this.getDireccion())
    }
}