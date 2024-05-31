import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_NAME = 'access_token';
  private tokenSubject = new BehaviorSubject<string | null>(this.getTokenFromStorage());
  public token$ = this.tokenSubject.asObservable();

  private getTokenFromStorage(): string | null {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  getToken(): string | null {
    return this.tokenSubject.getValue();
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
    this.tokenSubject.next(token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
    this.tokenSubject.next(null);
  }
}
