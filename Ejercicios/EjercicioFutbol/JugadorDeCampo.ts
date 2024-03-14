import { Jugador } from "./Jugador"; 
import { Posicion } from "./Posicion"; 
import { Provincias } from "./Provincias"; 

export class JugadorDeCampo extends Jugador {
    private porcentajeGolesConvertidos: number;
    private cantidadTiros: number;
    private cantidadGoles: number;
    private asistenciasRealizadas: number;

    constructor(nombre: string, apellido: string, nacimiento: Date, posicion: Posicion, provincia: Provincias, historialEquipos: Map<number, string>, numeroCamiseta: number, porcentajeGolesConvertidos: number, asistenciasRealizadas: number) {
        super(nombre, apellido, nacimiento, posicion, provincia, historialEquipos, numeroCamiseta);
        this.porcentajeGolesConvertidos = porcentajeGolesConvertidos;
        this.cantidadTiros = 0;
        this.cantidadGoles = 0;
        this.asistenciasRealizadas = asistenciasRealizadas;
    }

    get getPorcentajeGolesConvertidos(): number {
        return this.porcentajeGolesConvertidos;
    }
    
    set setPorcentajeGolesConvertidos(porcentajeGolesConvertidos: number) {
        this.porcentajeGolesConvertidos = porcentajeGolesConvertidos;
    }
    
    get getAsistenciasRealizadas(): number {
        return this.asistenciasRealizadas;
    }
    
    setAsistenciasRealizadas(asistenciasRealizadas: number) {
        this.asistenciasRealizadas = asistenciasRealizadas;
    }
    
    get getCantidadTiros(): number {
        return this.cantidadTiros;
    }
    
    set setCantidadTiros(cantidadTiros: number) {
        this.cantidadTiros = cantidadTiros;
    }
    
    get getCantidadGoles(): number {
        return this.cantidadGoles;
    }
    
    set setCantidadGoles(cantidadGoles: number) {
        this.cantidadGoles = cantidadGoles;
    }
    
    calcularPorcentaje(): void {
        this.porcentajeGolesConvertidos = (this.cantidadGoles / this.cantidadTiros) * 100;
    }
    
    agregarEstadistica(estadistica: number): void {
        if (estadistica < 0) {
            this.cantidadTiros += Math.abs(estadistica);
        } else {
            this.cantidadGoles += estadistica;
            this.cantidadTiros += estadistica;
        }
    }
    
    mostrarPorcentaje(): void {
        console.log("El porcentaje de goles es: " + this.porcentajeGolesConvertidos + "%");
    }
    
}