import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gerador-peca',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <h1>Gerador de Peças</h1>
    <mat-card>
      <mat-card-content>
        <p>Selecione um processo e o tipo de peça para gerar um rascunho com IA.</p>
        <button mat-raised-button color="primary">
          <mat-icon>auto_awesome</mat-icon> Gerar peça com IA
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`mat-card { max-width: 600px; }`],
})
export class GeradorPecaComponent {}
