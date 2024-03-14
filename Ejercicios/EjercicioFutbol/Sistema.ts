import { Partido } from "./Partido";

export class Sistema {
    private partidosJugados: Set<Partido>;

    constructor() {
        this.partidosJugados = new Set<Partido>();
    }
}
