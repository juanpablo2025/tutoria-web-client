// src/app/components/listar-festivos/listar-festivos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoService, Festivo } from '../../services/festivos.service';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule],
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css'],
})
export class ListarFestivosComponent implements OnInit {
  festivos: Festivo[] = []; // Define el tipo explícitamente
  columns = [
    { prop: 'nombre', name: 'Nombre' }, // Solo se muestra la columna 'nombre'
  ];

  constructor(private festivoService: FestivoService) {}

  ngOnInit(): void {
    this.festivoService.listarFestivos().subscribe(
      (data) => {
        console.log('Datos recibidos del API:', data); // Agrega esto para verificar
        this.festivos = data;
      },
      (error) => console.error('Error al obtener los festivos:', error)
    );
  }
}