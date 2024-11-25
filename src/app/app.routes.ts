import { Routes } from '@angular/router';
import { ListarFestivosComponent } from './components/listar-festivos/listar-festivos.component';
import { VerificarFestivoComponent } from './components/verificar-festivo/verificar-festivo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/listar-festivos', pathMatch: 'full' },
  { path: 'listar-festivos', component: ListarFestivosComponent },
  { path: 'verificar-festivo', component: VerificarFestivoComponent },
];