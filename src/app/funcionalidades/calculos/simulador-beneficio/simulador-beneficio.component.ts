import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simulador-beneficio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <h1>Simulador de Benefício</h1>
    <mat-card>
      <mat-card-content>
        <p>Selecione um cliente e importe o extrato CNIS para simular os cenários de aposentadoria.</p>
        <button mat-raised-button color="primary">
          <mat-icon>upload</mat-icon> Importar CNIS
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`mat-card { max-width: 600px; }`],
})
export class SimuladorBeneficioComponent {}
