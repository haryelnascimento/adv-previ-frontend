import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTableModule, MatIconModule],
  template: `
    <div class="cabecalho">
      <h1>Clientes</h1>
      <a mat-raised-button color="primary" routerLink="/clientes/novo">
        <mat-icon>add</mat-icon> Novo cliente
      </a>
    </div>
    <p class="vazio">Nenhum cliente cadastrado ainda.</p>
  `,
  styles: [`
    .cabecalho { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .vazio { color: #666; }
  `],
})
export class ListaClientesComponent {}
