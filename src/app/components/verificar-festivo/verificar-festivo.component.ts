import { Component } from '@angular/core';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html'
})
export class VerificarFestivoComponent {
  fecha: string = '';
  esFestivo: boolean = false;

  verificarFecha() {
    this.esFestivo = this.fecha === '2024-01-01'; // Cambia esta lógica según tus necesidades
  }
}