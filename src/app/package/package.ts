export class Package {
    nombre: string;
    descripcion: string;
    imagen: string;
    like: boolean;
    creador: string;

    constructor(nombre: string, descripcion: string, imagen: string, like: boolean, creador: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.like = like;
        this.creador = creador;
    }
}
