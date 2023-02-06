import { Component } from '@angular/core';

@Component({
  selector: 'app-api-service',
  templateUrl: './api-service.component.html',
  styleUrls: ['./api-service.component.css']
})
export class ApiServiceComponent {
  deleteRow(id: any) {
    throw new Error('Method not implemented.');
  }
  pizza: any;

}
