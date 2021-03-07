export interface Transferencia{
    idTransferencia: number;
    idRemitente: number;
    idBeneficiario: number;
    idPagador: number;
    monto: number;
    comision: number;
    estado: string;
    fechaTramitado: Date;
    nombreRemitente: string;
    nombreBeneficiario: string;
    nombrePagador: string;
}