import { Tiro } from "./Tiro";
import { TipoTiro } from "./TipoTiro";

export class Partido {
    private nombreEquipo1: string;
    private nombreEquipo2: string;
    private tiros: Set<Tiro>;

    constructor(nombreEquipo1: string, nombreEquipo2: string, tiros: Set<Tiro>) {
        this.nombreEquipo1 = nombreEquipo1;
        this.nombreEquipo2 = nombreEquipo2;
        this.tiros = tiros;
    }

    get getNombreEquipo1(): string {
        return this.nombreEquipo1;
    }

    set setNombreEquipo1(nombreEquipo1: string) {
        this.nombreEquipo1 = nombreEquipo1;
    }

    get getNombreEquipo2(): string {
        return this.nombreEquipo2;
    }

    set setNombreEquipo2(nombreEquipo2: string) {
        this.nombreEquipo2 = nombreEquipo2;
    }

    get getTiros(): Set<Tiro> {
        return this.tiros;
    }

    set setTiros(tiros: Set<Tiro>) {
        this.tiros = tiros;
    }

    calcularEstadisticasJugadores(): void {
        for (const tiro of this.tiros) {
            switch (tiro.getTipo) {
                case TipoTiro.GOL:
                    tiro.getArquero.agregarEstadistica(-1);
                    tiro.getPateador.agregarEstadistica(1);
                    tiro.getAsistente.setAsistenciasRealizadas(tiro.getAsistente.getAsistenciasRealizadas + 1);
                    break;
                case TipoTiro.AFUERA:
                    tiro.getPateador.agregarEstadistica(-1);
                    break;
                case TipoTiro.ATAJADO:
                    tiro.getArquero.agregarEstadistica(1);
                    tiro.getPateador.agregarEstadistica(-1);
                    break;
                case TipoTiro.EN_CONTRA:
                    tiro.getPateador.agregarEstadistica(-1);
                    break;
            }
        }
    }
}
