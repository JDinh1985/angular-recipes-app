import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_KEY = 'AIzaSyAJbTg_up0Lj2FMq-hq2X9EeFa-pSFA7CU';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

}
