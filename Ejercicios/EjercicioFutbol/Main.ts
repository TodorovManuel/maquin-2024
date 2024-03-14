import { Arquero } from "./Arquero";
import { JugadorDeCampo } from "./JugadorDeCampo";
import { Partido } from "./Partido";
import { Posicion } from "./Posicion";
import { Provincias } from "./Provincias";
import { Sistema } from "./Sistema";
import { TipoTiro } from "./TipoTiro";
import { Tiro } from "./Tiro";

class Main {
    public static main(): void {
        const sistema: Sistema = new Sistema();
        const p1: Partido = new Partido("River", "Boca", new Set<Tiro>());
        const fechaActual: Date = new Date();

        const jc1: JugadorDeCampo = new JugadorDeCampo("Leonel", "Messi", fechaActual, Posicion.DELANTERO, Provincias.BUENOSAIRES, new Map<number, string>(), 10, 0.0, 0);
        const jc2: JugadorDeCampo = new JugadorDeCampo("Rodri", "Depol", fechaActual, Posicion.MEDIOCAMPISTA, Provincias.CHACO, new Map<number, string>(), 7, 0.0, 0);
        const a1: Arquero = new Arquero("Chiquito", "Romero", fechaActual, Posicion.ARQUERO, Provincias.JUJUY, new Map<number, string>(), 1, 0.0, 0);

        const tiro1: Tiro = new Tiro(TipoTiro.ATAJADO, jc1, jc2, a1);
        const tiro2: Tiro = new Tiro(TipoTiro.GOL, jc2, jc1, a1);
        const tiro3: Tiro = new Tiro(TipoTiro.EN_CONTRA, jc2, jc1, a1);

        p1.getTiros.add(tiro1);
        p1.getTiros.add(tiro2);
        p1.getTiros.add(tiro3);

        p1.calcularEstadisticasJugadores();
        a1.calcularPorcentaje();
        a1.mostrarPorcentaje();

        a1.getHistorialEquipos.set(2023, "Boca");
        a1.renovar("Boca", 2);

        jc1.calcularPorcentaje();
        jc1.mostrarPorcentaje();
        jc1.getHistorialEquipos.set(2022, "Racing");
        jc1.getHistorialEquipos.set(2023, "River");
        jc1.contratar("Racing", Posicion.DELANTERO);

        jc2.calcularPorcentaje();
        jc2.mostrarPorcentaje();
        jc2.getHistorialEquipos.set(2022, "Racing");
        jc2.getHistorialEquipos.set(2023, "River");
        jc2.contratar("Crucero del Norte", Posicion.MEDIOCAMPISTA);
    }
}
