import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <h1>Novo Cliente</h1>
    <form [formGroup]="form" (ngSubmit)="salvar()" class="formulario">
      <mat-form-field appearance="outline">
        <mat-label>Nome completo</mat-label>
        <input matInput formControlName="nomeCompleto" />
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>CPF</mat-label>
        <input matInput formControlName="cpf" placeholder="000.000.000-00" />
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Data de nascimento</mat-label>
        <input matInput [matDatepicker]="picker" formControlName="dataNascimento" />
        <mat-datepicker-toggle matIconSuffix [for]="picker" />
        <mat-datepicker #picker />
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Telefone</mat-label>
        <input matInput formControlName="telefone" />
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>E-mail</mat-label>
        <input matInput formControlName="email" type="email" />
      </mat-form-field>

      <div class="acoes">
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">
          Salvar
        </button>
      </div>
    </form>
  `,
  styles: [`
    .formulario { display: flex; flex-direction: column; gap: 16px; max-width: 500px; }
    .acoes { display: flex; justify-content: flex-end; }
  `],
})
export class CadastroClienteComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    nomeCompleto: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: [null as Date | null],
    telefone: ['', Validators.required],
    email: ['', Validators.email],
  });

  salvar(): void {
    if (this.form.valid) {
      // TODO: chamar ClienteService
      console.log('Salvar cliente:', this.form.value);
    }
  }
}
