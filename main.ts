let a : number;
a = 10;
console.log("Bardelli va a la selección");

class Chef {
    nombreChef : String;
    experiencia : Boolean;
    fechaNacimiento : Date;

    constructor(nombreChef:String, experiencia:Boolean, fechanacimiento:Date) {
        this.nombreChef = nombreChef;
        this.experiencia = experiencia;
        this.fechaNacimiento = fechanacimiento;
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
    listadoPlatos: Array<Plato>;
    listadoChefs: Array<Chef>;

    constructor(nombreResto:String, listadoPlatos:Array<Plato>, listadoChefs:Array<Chef>) {
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
    public set setListadoPlatos(listadoPlatos: Array<Plato>){
        this.listadoPlatos = this.listadoPlatos;
    }

    public get getListadoChefs(){
        return this.listadoChefs;
    }
    public set setListadoChefs(listadoChefs: Array<Chef>){
        this.listadoChefs = this.listadoChefs;
    }

     private contratarChef(chef : Chef) : void {
        if(chef.getExperiencia && chef.getFechaNacimiento){

        }
    }
}