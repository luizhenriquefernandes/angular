import { DatePipe } from "@angular/common";

export class Animal{
    private _nome:string;
    private _tipo:string;
    private _dataNasc: string;

    constructor(nome:string,tipo:string,dataNasc:string){
        this._nome = nome;
        this._tipo = tipo;
        this._dataNasc = dataNasc;
    }
    
    public get nome () : string {
        return this._nome;
    }
    public get tipo () : string{
        return this._tipo;
    }
    public get dataNasc():string{
        return this._dataNasc;
    }
    public set nome(nome : string) {
        this._nome = nome;
    }
    public set tipo(tipo : string) {
        this._tipo = tipo;
    }
    public set dataNasc(dataNasc : string) {
        this._dataNasc = dataNasc;
    }
    /**
     * calcularIdade
     */
    public calcularIdade() {
    const dataAtual = new Date();
    return this.getDiffYe

     
     
}
}