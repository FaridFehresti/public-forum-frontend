import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_NAME = 'access_token';
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject.asObservable();
  getToken(): string | null {
    return this.tokenSubject.getValue();
}    

setToken(token: string): void {
  this.tokenSubject.next(token);
  // Implement secure storage logic here (e.g., HttpOnly cookies)
}

removeToken(): void {
  this.tokenSubject.next(null);
  // Implement logic to remove token from secure storage
}
}
