import { Jugador } from "./Jugador"; 
import { Posicion } from "./Posicion"; 
import { Provincias } from "./Provincias"; 
import { Porcentaje } from "./Porcentaje";

export class Arquero extends Jugador implements Porcentaje{
    private porcentajeAtajadas: number;
    private golesRecibidos: number;
    private golesAtajados: number;

    constructor(nombre: string, apellido: string, nacimiento: Date, posicion: Posicion, provincia: Provincias, historialEquipos: Map<number, string>, numeroCamiseta: number, porcentajeAtajadas: number, golesRecibidos: number) {
        super(nombre, apellido, nacimiento, posicion, provincia, historialEquipos, numeroCamiseta);
        this.porcentajeAtajadas = porcentajeAtajadas;
        this.golesRecibidos = golesRecibidos;
        this.golesAtajados = 0;
    }
    
    get getPorcentajeAtajadas(): number {
        return this.porcentajeAtajadas;
    }

    set setPorcentajeAtajadas(porcentajeAtajadas: number) {
        this.porcentajeAtajadas = porcentajeAtajadas;
    }

    get getgolesRecibidos(): number {
        return this.golesRecibidos;
    }

    set setgolesRecibidos(golesRecibidos: number) {
        this.golesRecibidos = golesRecibidos;
    }

    get getgolesAtajados(): number {
        return this.golesAtajados;
    }

    set setgolesAtajados(golesAtajados: number) {
        this.golesAtajados = golesAtajados;
    }

    calcularPorcentaje(): void {
        this.porcentajeAtajadas = (this.golesAtajados / (this.golesRecibidos + this.golesAtajados)) * 100;
    }
    
    agregarEstadistica(estadistica: number): void {
        if (estadistica < 0) {
            this.golesRecibidos += Math.abs(estadistica);
        } else {
            this.golesAtajados += estadistica;
        }
    }
    
    mostrarPorcentaje(): void {
        console.log("El porcentaje de goles atajados es: " + this.porcentajeAtajadas + "%");
    }
    
    
}
