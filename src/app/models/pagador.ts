export interface Pagador{
    idPagador: number;
    nombre: string;
    calle: string;
    numero: number;
    colonia: string;
    cp: number;
    ciudad: string;
    pais: string;
    fechaRegistro: Date;
    activo: boolean;
}