// src/app/services/festivos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Festivo {
  nombre: string; // Solo contiene la propiedad 'nombre'
}

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  private apiUrl = 'http://localhost:8080/festivos/listar'; // URL corregida

  constructor(private http: HttpClient) {}

  listarFestivos(): Observable<Festivo[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) =>
        data.map((item) => ({
          nombre: item.nombre, // Mapear para asegurarnos de que coincide con el modelo
        }))
      )
    );
  }
}