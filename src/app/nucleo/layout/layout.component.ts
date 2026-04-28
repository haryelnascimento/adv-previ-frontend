import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ItemMenu {
  label: string;
  rota: string;
  icone: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  readonly itensMenu: ItemMenu[] = [
    { label: 'Dashboard',  rota: '/dashboard',  icone: 'dashboard' },
    { label: 'Clientes',   rota: '/clientes',   icone: 'people' },
    { label: 'Processos',  rota: '/processos',  icone: 'gavel' },
    { label: 'Cálculos',   rota: '/calculos',   icone: 'calculate' },
    { label: 'Peças',      rota: '/pecas',      icone: 'description' },
  ];
}
