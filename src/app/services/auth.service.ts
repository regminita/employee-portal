import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(userCredentials) {
    return this.http.post('/users/authenticate', userCredentials).pipe(map(user => {
      let userData = JSON.parse(JSON.stringify(user));
      if(userData && userData.token){
          localStorage.setItem('token', userData.token)
          this.currentUserSubject.next(userData.token);
          return true;
      }
      return false;
    }));

     
  }

  isLoggedIn() {
    if(!localStorage.getItem('token')) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
