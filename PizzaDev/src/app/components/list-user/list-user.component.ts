import { Component,OnInit,Inject } from '@angular/core';
import {Router} from "@angular/router";
import { data } from 'jquery';
import {ApiService} from '../services/api-service/api-service.component';
import {User} from '../../model/user.models';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: User[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers().subscribe((data: { result: any; }) => {
      this.users = data.result;
    });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id).subscribe((data: any) => {
      this.users = this.users.filter((u: any) => u !== user);
    })
  };
  editUser(userId: string): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString(userId));
    this.router.navigate(['add-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
