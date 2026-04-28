import { Routes } from '@angular/router';
import { authGuard } from './nucleo/autenticacao/auth.guard';
import { LayoutComponent } from './nucleo/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./funcionalidades/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./funcionalidades/clientes/lista-clientes/lista-clientes.component').then(
            m => m.ListaClientesComponent
          ),
      },
      {
        path: 'clientes/novo',
        loadComponent: () =>
          import('./funcionalidades/clientes/cadastro-cliente/cadastro-cliente.component').then(
            m => m.CadastroClienteComponent
          ),
      },
      {
        path: 'processos',
        loadComponent: () =>
          import('./funcionalidades/processos/lista-processos/lista-processos.component').then(
            m => m.ListaProcessosComponent
          ),
      },
      {
        path: 'calculos',
        loadComponent: () =>
          import('./funcionalidades/calculos/simulador-beneficio/simulador-beneficio.component').then(
            m => m.SimuladorBeneficioComponent
          ),
      },
      {
        path: 'pecas',
        loadComponent: () =>
          import('./funcionalidades/pecas/gerador-peca/gerador-peca.component').then(
            m => m.GeradorPecaComponent
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/dashboard' },
];
