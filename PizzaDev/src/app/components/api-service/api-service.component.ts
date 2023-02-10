import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {ApiResponse} from './../services/api-response';

@Injectable()

export class ApiService {
  //status: number;

  constructor(private http: HttpClient) { }
    Url: string = ('http://localhost:4200/');
}
export class ApiServiceComponent {
  constructor(private http: HttpClient) { }
  Url: string = ('http://localhost:4200/');

  users: User[] = [];
  apiService: any;

  login(loginPayload: { username: any; password: any; }): Observable<ApiService> {
    return this.http.post<ApiService>('http://localhost:4200/' + 'token/generate-token', loginPayload);
  }

  getUser(): Observable<ApiResponse> {
    const url = '';
    return this.http.get<ApiResponse>(this.Url);
  }

  getUserById(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.Url + id);
  }

  createUser(user: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.Url,user);
  }

  updateUser(user: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.Url + user.id, user);
  }

  deleteUser(id: any): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.Url + id);
  }


  getError(getError: any): Observable<any[]> {
    return this.http.get<ApiResponse>(this.Url + getError);
  }
  pizza: any;

}
