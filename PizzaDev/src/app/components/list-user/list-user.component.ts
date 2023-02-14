import { Component,OnInit,Inject } from '@angular/core';
import {Router} from "@angular/router";
import { data } from 'jquery';
import {ApiService} from '../api-service/api-service.component';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers().subscribe(data => {
      this.users = data.result;
    });
  }

  deleteUser(userId: string) {
    this.apiService.deleteUser(userId).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
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
