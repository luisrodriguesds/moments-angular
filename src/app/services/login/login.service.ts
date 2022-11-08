import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

const AUTH_API = `${environment.baseApiUrl}/api/auth`;

export interface ILogin {
  email: string;
  password: string;
}
interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IAuth {
  token: string;
  user: IUser;
}

const TOKEN_KEY = 'moment-auth-token';
const USER_KEY = 'moment-auth-user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpServer: HttpClient, private router: Router) {
    if (!this.isLogged()) {
      return;
    }
    this.isUserLogged.next(true);
  }

  login(data: ILogin): Observable<IAuth> {
    return this.httpServer.post<IAuth>('api/auth', data);
  }

  signIn(data: IAuth): void {
    this.saveUser(data.user);
    this.saveToken(data.token);
    this.isUserLogged.next(true);
  }

  signOut(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    this.router.navigate(['/']);
  }

  saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY) || null;
  }

  saveUser(user: IUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  isLogged(): boolean {
    const isLogged = this.getToken() && this.getUser();
    return !!isLogged;
  }

  getUser(): IUser | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }
}
