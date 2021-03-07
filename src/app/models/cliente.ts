export interface Cliente{
    idCliente: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    calle: string;
    numero: number;
    colonia: string;
    cp: number;
    ciudad: string;
    pais: string;
    fechaRegistro: Date;
    activo: boolean;
}