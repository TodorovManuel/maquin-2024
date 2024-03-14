import { JugadorDeCampo } from "./JugadorDeCampo"; 
import { Arquero } from "./Arquero"; 
import { TipoTiro } from "./TipoTiro"; 

export class Tiro {
    private tipo: TipoTiro;
    private pateador: JugadorDeCampo;
    private asistente: JugadorDeCampo;
    private arquero: Arquero;

    constructor(tipo: TipoTiro, pateador: JugadorDeCampo, asistente: JugadorDeCampo, arquero: Arquero) {
        this.tipo = tipo;
        this.pateador = pateador;
        this.asistente = asistente;
        this.arquero = arquero;
    }

    get getTipo(): TipoTiro {
        return this.tipo;
    }

    set setTipo(tipo: TipoTiro) {
        this.tipo = tipo;
    }

    get getPateador(): JugadorDeCampo {
        return this.pateador;
    }

    set setPateador(pateador: JugadorDeCampo) {
        this.pateador = pateador;
    }

    get getAsistente(): JugadorDeCampo {
        return this.asistente;
    }

    set setAsistente(asistente: JugadorDeCampo) {
        this.asistente = asistente;
    }

    get getArquero(): Arquero {
        return this.arquero;
    }

    set setArquero(arquero: Arquero) {
        this.arquero = arquero;
    }
    
}
