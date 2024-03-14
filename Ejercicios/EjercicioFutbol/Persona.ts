export abstract class Persona{
    
    private nombre : string;
    private apellido : string;
    private nacimiento : Date;

    constructor(nombre : string, apellido : string , nacimiento : Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
    }

    get getNombre() : string {
        return this.nombre;
    }

    set setNombre(nombre : string) {
        this.nombre = nombre;
    }

    get getApellido() : string {
        return this.apellido;
    }

    set setApellido(apellido : string) {
        this.apellido = apellido;
    }

    get getNacimiento() : Date {
        return this.nacimiento;
    }

    set setNacimiento(nacimiento : Date) {
        this.nacimiento = nacimiento;
    }
}