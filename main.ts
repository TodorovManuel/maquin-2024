class Chef {
    nombreChef: String;
    experiencia: Boolean;
    fechaNacimiento: Date;

    constructor(nombreChef: String, experiencia: Boolean, fechanacimiento: Date) {
        this.nombreChef = nombreChef;
        this.experiencia = experiencia;
        this.fechaNacimiento = fechanacimiento;
    }

    public get getEdad(): number {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    public get getNombreChef() {
        return this.nombreChef;
    }

    public set setNombreChef(nombreChef: String) {
        this.nombreChef = nombreChef;
    }

    public get getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    public set setFechaNacimiento(fechaNacimiento: Date) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public get getExperiencia() {
        return this.experiencia;
    }

    public set setExperiencia(experiencia: Boolean) {
        this.experiencia = experiencia;
    }
}



class Plato {
    nombrePlato: String;
    chefACargo: Chef;
    precio: number;
    tipo : TipoPlato;

    constructor(nombrePlato: String, chefACargo: Chef, precio: number, tipo:TipoPlato) {
        this.nombrePlato = nombrePlato;
        this.chefACargo = chefACargo;
        this.precio = precio;
        this.tipo = tipo;
    }

    public get getNombrePlato() {
        return this.nombrePlato;
    }

    public set setNombrePlato(nombrePlato: String) {
        this.nombrePlato = nombrePlato;
    }

    public get getChefACargo() {
        return this.chefACargo;
    }

    public set setChefACargo(chefACargo: Chef) {
        this.chefACargo = chefACargo;
    }

    public get getPrecio() {
        return this.precio;
    }
    public set setPrecio(precio: number) {
        this.precio = precio;
    }

    public get getTipo() {
        return this.tipo;
    }

    public set setTipo(tipo: TipoPlato) {
        this.tipo = tipo;
    }
}



class Resto {
    nombreResto: String;
    listadoPlatos: Set<Plato>;
    listadoChefs: Set<Chef>;

    constructor(nombreResto: String, listadoPlatos: Set<Plato>, listadoChefs: Set<Chef>) {
        this.nombreResto = nombreResto;
        this.listadoPlatos = listadoPlatos;
        this.listadoChefs = listadoChefs;
    }

    public get getNombreResto() {
        return this.nombreResto;
    }
    public set setNombreResto(nombreResto: String) {
        this.nombreResto = nombreResto;
    }

    public get getListadoPlatos() {
        return this.listadoPlatos;
    }
    public set setListadoPlatos(listadoPlatos: Set<Plato>) {
        this.listadoPlatos = this.listadoPlatos;
    }

    public get getListadoChefs() {
        return this.listadoChefs;
    }
    public set setListadoChefs(listadoChefs: Set<Chef>) {
        this.listadoChefs = this.listadoChefs;
    }

    public contratarChef(chef: Chef): void {
        if (chef.getExperiencia) {
            if (chef.getEdad >= 18) {
                this.listadoChefs.add(chef);
            } else {
                throw "ChefMenorDeEdad"
            }
        } else {
            throw "ChefSinExperiencia"
        }

    }

    public agregarPlato(plato: Plato): void {
        if (!this.listadoPlatos.has(plato)) {
            if (this.listadoChefs.has(plato.getChefACargo)) {
                this.listadoPlatos.add(plato);
            } else {
                throw "ChefNoContratado"
            }
        } else {
            throw "PlatoYaExiste";
        }
    }


}

enum TipoPlato {
    ENTRADA, PLATO_PRINCIPAL, POSTRE, OTRO
}

class Mesa {
    private numeroMesa:number;
    private pedido:Pedido;

    constructor(numeroMesa:number, pedido:Pedido) {
        this.numeroMesa = numeroMesa;
        this.pedido = pedido;
    }

    public get getNumeroMesa() {
        return this.numeroMesa;
    }
    public set setNumeroMesa(numeroMesa:number) {
        this.numeroMesa = this.numeroMesa;
    }
    public get getPedido() {
        return this.pedido;
    }
    public set setPedido(pedido:Pedido) {
        this.pedido = this.pedido;
    }

    cuentaMesa(pedido:Pedido) {
        let suma = 0;
        for (let item of pedido.getListaPlatos.values()) {
            if(pedido.getEntregado) {
                suma+=item.getPrecio;
            } else {
                console.log("El pedido no fue entregado aún")
            }
        }
    }
}

class Pedido {
    private listaPlatos:Set<Plato>;
    private mesa:Mesa;
    private entregado:Boolean;


    constructor(listaPlatos:Set<Plato>, mesa:Mesa, entregado:Boolean) {
        this.listaPlatos = listaPlatos;
        this.mesa = mesa;
        this.entregado = entregado;
    }

    public get getListaPlatos () {
        return this.listaPlatos;
    }
    public set setListaPlatos(listaPlatos:Set<Plato>) {
        this.listaPlatos = this.listaPlatos;
    }
    public get getMesa() {
        return this.mesa;
    }
    public set setMesa(mesa:Mesa) {
        this.mesa = this.mesa;
    }
    public get getEntregado() {
        return this.entregado;
    }
    public set setEntregado(entregado:Boolean) {
        this.entregado = this.entregado;
    }

}