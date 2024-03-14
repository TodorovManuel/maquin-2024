import { Arquero } from "./Arquero";
import { JugadorDeCampo } from "./JugadorDeCampo";
import { Persona } from "./Persona"; 
import { Posicion } from "./Posicion"; 
import { Provincias } from "./Provincias"; 



export abstract class Jugador extends Persona {
    protected posicion : Posicion;
    protected provincia : Provincias;
    protected numeroCamiseta : number;
    protected historialEquipos : Map<number, string>;

    constructor(nombre: string, apellido: string, nacimiento: Date, posicion: Posicion, provincia: Provincias, historialEquipos: Map<number, string>, numeroCamiseta: number) {
        super(nombre, apellido, nacimiento);
        this.posicion = posicion;
        this.provincia = provincia;
        this.historialEquipos = historialEquipos;
        this.numeroCamiseta = numeroCamiseta;
    }

    get getPosicion(): Posicion {
        return this.posicion;
    }

    set setPosicion(posicion: Posicion) {
        this.posicion = posicion;
    }

    get getProvincia(): Provincias {
        return this.provincia;
    }

    set setProvincia(provincia: Provincias) {
        this.provincia = provincia;
    }

    get getHistorialEquipos(): Map<number, string> {
        return this.historialEquipos;
    }

    set setHistorialEquipos(historialEquipos: Map<number, string>) {
        this.historialEquipos = historialEquipos;
    }

    get getNumeroCamiseta(): number {
        return this.numeroCamiseta;
    }

    set setNumeroCamiseta(numeroCamiseta: number) {
        this.numeroCamiseta = numeroCamiseta;
    }

    containsValue(map: Map<number, string>, value: string): boolean {
        for (let val of map.values()) {
            if (val === value) {
                return true;
            }
        }
        return false;
    }

    calcularEdad(fechaNacimiento: Date): number {
        const ahora = new Date();
        const edad = ahora.getFullYear() - fechaNacimiento.getFullYear();
    
        // Comprobar si ya ha pasado el cumpleaños de este año
        const cumpleaniosPasadoEsteAnio =
            ahora.getMonth() > fechaNacimiento.getMonth() ||
            (ahora.getMonth() === fechaNacimiento.getMonth() &&
                ahora.getDate() >= fechaNacimiento.getDate());
    
        // Reducir la edad en 1 si aún no ha pasado el cumpleaños de este año
        return cumpleaniosPasadoEsteAnio ? edad : edad - 1;
    }

    contratar(nombreClub: string, posicion: Posicion): void {   
        try {
            if (!this.containsValue(this.historialEquipos, nombreClub)){
                if (posicion === Posicion.ARQUERO){
                    let arquero = this as unknown as Arquero;
                    let porcAtajadas = arquero.getPorcentajeAtajadas;
                    let golesRec = arquero.getgolesRecibidos;
                    if (porcAtajadas > 60.00 && golesRec < 10){
                        console.log(this.toString() + "que juega de arquero, se contrato para el club " + nombreClub);
                        let anioActual = new Date().getFullYear();
                        this.historialEquipos.set(anioActual, nombreClub);
                    } else {
                        throw new Error("El arquero que quiere contratar no cumple los requisitos");
                    }
                } else {
                    let jugadorDeCampo = this as unknown as JugadorDeCampo;
                    let porcGoles = jugadorDeCampo.getPorcentajeGolesConvertidos;
                    let asist = jugadorDeCampo.getAsistenciasRealizadas;
                    if (porcGoles > 30.00 && asist > 10){
                        console.log(this.toString() + " juega de " + jugadorDeCampo.getPosicion + " y se contrato para el " + nombreClub);
                        let anioActual = new Date().getFullYear();
                        this.historialEquipos.set(anioActual, nombreClub);
                    } else {
                        throw new Error("El " + jugadorDeCampo.getPosicion + " que quiere contratar no cumple los requisitos");
                    }
                }
            } else {
                throw new Error("El jugador a contratar ya ha jugado en ese club");
            }
        } catch (e : any) {
            console.log(e.message);
        }
    }
    
    renovar(nombreClub: string, cantAniosRenovar: number): void {
        try {
            let equipo2023 = this.historialEquipos.get(2023);
            if (equipo2023 != null){
                if (equipo2023 === nombreClub){
                    let edad = this.calcularEdad(this.getNacimiento);
                    if (edad <= 35){
                        console.log(this.toString() + " que juega de " + this.getPosicion + " se renovo para el " + nombreClub);
                        let aniosRenovado = new Date().getFullYear() + cantAniosRenovar;
                        this.historialEquipos.set(aniosRenovado, nombreClub);
                    } else {
                        throw new Error("El jugador que desea renovar es mayor a 35 anios");
                    }
                } else {
                    throw new Error("El jugador que desea renovar no pertenece a su club");
                }
            } else {
                throw new Error("El jugador que quiere renovar no pertenece a ningun club, pruebe contratandolo");
            }
        } catch (e : any) {
            console.log(e.message);
        }
    }
}
