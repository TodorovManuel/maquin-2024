class Chef {
    nombreChef : String;
    experiencia : Boolean;
    fechaNacimiento : Date;

    constructor(nombreChef:String, experiencia:Boolean, fechanacimiento:Date) {
        this.nombreChef = nombreChef;
        this.experiencia = experiencia;
        this.fechaNacimiento = fechanacimiento;
    }

    public get getEdad(): number{
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if(mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())){
            edad--;
        }
        return edad;
    }
    public get getNombreChef(){
        return this.nombreChef;
    }

    public set setNombreChef(nombreChef : String){
        this.nombreChef = nombreChef;
    }

    public get getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    public set setFechaNacimiento(fechaNacimiento : Date){
        this.fechaNacimiento = fechaNacimiento;
    }

    public get getExperiencia(){
        return this.experiencia;
    }

    public set setExperiencia(experiencia : Boolean){
        this.experiencia = experiencia;
    }
}



class Plato {
    nombrePlato: String;
    chefACargo: Chef;

    constructor(nombrePlato:String, chefACargo:Chef){
        this.nombrePlato = nombrePlato;
        this.chefACargo = chefACargo;
    }

        public get getNombrePlato(){
        return this.nombrePlato;
    }

    public set setNombrePlato(nombrePlato : String){
        this.nombrePlato = nombrePlato;
    }

    public get getChefACargo(){
        return this.chefACargo;
    }

    public set setChefACargo(chefACargo : Chef){
        this.chefACargo = chefACargo;
    }

}



class Resto {
    nombreResto: String;
    listadoPlatos: Set<Plato>;
    listadoChefs: Set<Chef>;

    constructor(nombreResto:String, listadoPlatos:Set<Plato>, listadoChefs:Set<Chef>) {
        this.nombreResto = nombreResto;
        this.listadoPlatos = listadoPlatos;
        this.listadoChefs = listadoChefs;
    }

    public get getNombreResto(){
        return this.nombreResto;
    }
    public set setNombreResto(nombreResto: String){
        this.nombreResto = nombreResto;
    }

    public get getListadoPlatos(){
        return this.listadoPlatos;
    }
    public set setListadoPlatos(listadoPlatos: Set<Plato>){
        this.listadoPlatos = this.listadoPlatos;
    }

    public get getListadoChefs(){
        return this.listadoChefs;
    }
    public set setListadoChefs(listadoChefs: Set<Chef>){
        this.listadoChefs = this.listadoChefs;
    }

    public contratarChef(chef : Chef) : void {
        if(chef.getExperiencia){
            if(chef.getEdad >= 18){
                this.listadoChefs.add(chef);
            }else{
                throw "ChefMenorDeEdad"
            }
        }else{
            throw "ChefSinExperiencia"
        }
        
    }

    public agregarPlato(plato : Plato) : void{
        if(!this.listadoPlatos.has(plato)){
            if(this.listadoChefs.has(plato.getChefACargo)){
                this.listadoPlatos.add(plato);
            }else{
                throw "ChefNoContratado"
            }
        } else {
            throw "PlatoYaExiste";
        }
    }
}