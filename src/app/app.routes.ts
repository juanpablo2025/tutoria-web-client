import { Routes } from '@angular/router';
import { ListarFestivosComponent } from './components/listar-festivos/listar-festivos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/listar-festivos', pathMatch: 'full' },
  { path: 'listar-festivos', component: ListarFestivosComponent },
];