import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <h1>Dashboard</h1>
    <div class="cards-resumo">
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>people</mat-icon>
          <mat-card-title>Clientes</mat-card-title>
        </mat-card-header>
        <mat-card-content><p class="numero">—</p></mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>gavel</mat-icon>
          <mat-card-title>Processos ativos</mat-card-title>
        </mat-card-header>
        <mat-card-content><p class="numero">—</p></mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>alarm</mat-icon>
          <mat-card-title>Prazos hoje</mat-card-title>
        </mat-card-header>
        <mat-card-content><p class="numero">—</p></mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    h1 { margin-bottom: 24px; }
    .cards-resumo { display: flex; gap: 16px; flex-wrap: wrap; }
    mat-card { min-width: 180px; }
    .numero { font-size: 2rem; font-weight: 700; margin: 8px 0 0; }
  `],
})
export class DashboardComponent {}
