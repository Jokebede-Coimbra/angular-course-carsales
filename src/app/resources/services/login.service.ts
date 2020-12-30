import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient,
    private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpCliente
      .post<ResponseLogin>('http://localhost:8080/api/login', requestLogin)
      .pipe(tap((loginResponse) => (this.authService.loginResponse = loginResponse)));
  }
}
