export interface Tarea {
  id: string;
  idUsuario: string;
  titulo: string;
  resumen: string;
  expira: string;
}

export interface TareaNuevaInfo {
  titulo: string;
  resumen: string;
  fecha: string;
}