import { Injectable, signal } from '@angular/core';

export interface UsuarioAutenticado {
  id: string;
  nome: string;
  email: string;
  perfil: 'SOCIO' | 'ADVOGADO' | 'ESTAGIARIO' | 'SECRETARIA';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _usuario = signal<UsuarioAutenticado | null>(null);

  readonly usuario = this._usuario.asReadonly();

  estaAutenticado(): boolean {
    return this._usuario() !== null;
  }

  perfil(): string | null {
    return this._usuario()?.perfil ?? null;
  }

  // TODO: integrar com Amazon Cognito SDK
  login(_email: string, _senha: string): Promise<void> {
    return Promise.resolve();
  }

  logout(): void {
    this._usuario.set(null);
  }
}
