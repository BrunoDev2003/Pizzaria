import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService {
  status: number;
  constructor(private http: HttpClient) { }
    Url: string = ('http://localhost:4200/');

    login(username: string, password: string): Observable<ApiService> {
      return this.http.post<ApiService>('http://localhost:4200/' + 'token/generate-token', username);
    }
}
export class ApiServiceComponent {
  deleteRow(id: any) {
    throw new Error('Method not implemented.');
  }

  getRows(): Observable<any> {
    const url = '';
    return this.deleteRow.get('./api-service.component')
      .map((result: Response) => result.json())
      .catch(this.getError);
  }
  getError(getError: any): Observable<any[]> {
    throw new Error('Error!!.');
  }
  pizza: any;

}
