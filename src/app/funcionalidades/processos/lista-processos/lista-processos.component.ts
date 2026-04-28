import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-processos',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="cabecalho">
      <h1>Processos</h1>
      <button mat-raised-button color="primary">
        <mat-icon>add</mat-icon> Novo processo
      </button>
    </div>
    <p class="vazio">Nenhum processo cadastrado ainda.</p>
  `,
  styles: [`
    .cabecalho { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .vazio { color: #666; }
  `],
})
export class ListaProcessosComponent {}
