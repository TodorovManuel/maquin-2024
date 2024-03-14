import { Jugador } from "./Jugador";

export class Equipo {
    private nombre : string;
    private jugadores : Set<Jugador>;

    constructor(nombre : string){
        this.nombre = nombre;
        this.jugadores = new Set<Jugador>;
    }

    get getNombre() : string{
        return this.nombre;
    }
    set setNombre(nombre : string){
        this.nombre = nombre;
    }

    get getJugadores() : Set<Jugador>{
        return this.jugadores;
    }
    set setJugadores(jugadores : Set<Jugador>){
        this.jugadores = jugadores;
    }
}