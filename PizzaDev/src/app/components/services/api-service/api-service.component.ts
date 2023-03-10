import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../../../model/user.models';
import {ApiResponse} from '../../../model/api.response';

@Injectable()

export class ApiService {
  users: any;
  apiService: any;
  status!: number;
  result: any;


  deleteUser(userId: number) {
    this.apiService.deleteUser(userId).subscribe( (data: any) => {
      this.users = this.users.filter((user: { id: any; }) => user.id === data);
      return this.users;
    })
    return this.apiService.deleteUser(userId);
  }


  getUsers() {
    return User;
  }

  createUser(user: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.Url,user);
  }

  updateUser(user: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.Url + user.id, user);
  }

  login(loginPayload: { username: any; password: any; }): Observable<ApiService> {
    return this.http.post<ApiService>('http://localhost:4200/' + 'token/generate-token', loginPayload);
  }

  getUserById(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.Url + id);
  }

  pizza: any;

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

  pizza: any;

}
