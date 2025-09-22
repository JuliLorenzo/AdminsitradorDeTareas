import { Component, Input, inject } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { TareaNuevaComponent } from "./tarea-nueva/tarea-nueva.component";
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaComponent, TareaNuevaComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})

export class TareasComponent {
  @Input({required: true}) idUsuario!: string;
  @Input({required: true}) nombre!: string;
  estaAgregandoTareaNueva = false;

  private tareasService = inject(TareasService);

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareaDeUsuario(this.idUsuario);
  }
  
  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarNuevaTarea() {
    this.estaAgregandoTareaNueva = false;
  }

}

