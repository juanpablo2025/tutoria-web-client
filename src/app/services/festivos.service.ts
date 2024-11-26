import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Festivo {
  nombre: string;
  dia: number;
  mes: number;
  diasPascua: number;
  idTipo: number;
}

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  private apiUrl = 'http://localhost:8080/festivos'; // Base URL del backend

  constructor(private http: HttpClient) {}


  verificarFecha(year: number, month: number, day: number): Observable<string> {
    const url = `${this.apiUrl}/verificar/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'text' }); // Asegura que el tipo de respuesta sea texto
  }


  listarFestivos(year: number): Observable<Festivo[]> {
    const url = `${this.apiUrl}/listar/${year}`; // Construir la URL con el año
    return this.http.get<Festivo[]>(url).pipe(
      map((data: any[]) =>
        data.map((item) => ({
          nombre: item.nombre,
          dia: item.dia,
          mes: item.mes,
          diasPascua: item.diasPascua,
          idTipo: item.idTipo,
        }))
      )
    );
  }
}