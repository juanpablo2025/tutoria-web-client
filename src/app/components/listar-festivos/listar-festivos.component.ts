import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoService, Festivo } from '../../services/festivos.service';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxDatatableModule], // Incluye FormsModule aquí
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css'],
})
export class ListarFestivosComponent implements OnInit {
  year: number = new Date().getFullYear();
  festivos: Festivo[] = [];
  loading: boolean = false;

  columns = [
    { prop: 'nombre', name: 'Nombre' },
    { prop: 'dia', name: 'Día' },
    { prop: 'mes', name: 'Mes' },
    { prop: 'diasPascua', name: 'Días desde Pascua' },
    { prop: 'idTipo', name: 'Tipo' },
  ];

  constructor(private festivoService: FestivoService) {}

  ngOnInit(): void {
    this.listarFestivos();
  }

  listarFestivos(): void {
    this.loading = true;
    this.festivoService.listarFestivos(this.year).subscribe(
      (data) => {
        this.festivos = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar festivos:', error);
        this.loading = false;
      }
    );
  }

  cambiarYear(nuevoYear: number): void {
    this.year = nuevoYear;
    this.listarFestivos();
  }
}