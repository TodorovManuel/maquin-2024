import { Posicion } from "./Posicion";

export interface Contrato {
    contratar(nombreClub: string, posicion: Posicion): void;
    renovar(nombreClub: string, cantAniosRenovar: number): void;
}