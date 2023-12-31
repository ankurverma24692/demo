import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<string> {
    return this.http.post<any>(
      environment.apiUrl + '/oauth2/genrate-token',
      {
        username: username,
        password: password,
      }
    );
  }

  // public register(
  //   username: string,
  //   email: string,
  //   password: string
  // ): Observable<string> {
  //   return this.http.post(
  //     environment.apiUrl + '/user/register',
  //     {
  //       username: username,
  //       email: email,
  //       password: password,
  //     },
  //     { responseType: 'text' }
  //   );
  // }
}
