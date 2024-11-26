import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FestivoService } from '../../services/festivos.service';

@Component({
  selector: 'app-verificar-festivo',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css'],
})
export class VerificarFestivoComponent {
  year: number = new Date().getFullYear(); // Año predeterminado
  month: number = 1; // Mes predeterminado
  day: number = 1; // Día predeterminado
  resultado: string = ''; // Resultado de la verificación
  error: string = ''; // Mensaje de error, si lo hay

  constructor(private festivoService: FestivoService) {}

  verificarFecha(): void {
    this.resultado = ''; // Limpia el resultado anterior
    this.error = ''; // Limpia errores anteriores

    this.festivoService.verificarFecha(this.year, this.month, this.day).subscribe({
      next: (response) => {
        this.resultado = response; // Muestra el resultado directamente
      },
      error: (err) => {
        this.error = err.error || 'Ocurrió un error al verificar la fecha'; // Maneja errores
      },
    });
  }
}