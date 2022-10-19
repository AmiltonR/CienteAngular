export interface Welcome {
    total:    number;
    usuarios: Array<Usuario>;
}

export interface Usuario {
    estado:    boolean;
    google:    boolean;
    _id:       string;
    nombre:    string;
    correo:    string;
    rol:       string;
}
