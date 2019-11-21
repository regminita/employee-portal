import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    let header = new HttpHeaders({
       'Authorization': "Bearer "+localStorage.getItem('token')
    });
    const httpOptions = {headers: header}
    return this.http.get('/employees', httpOptions);

  }
}
