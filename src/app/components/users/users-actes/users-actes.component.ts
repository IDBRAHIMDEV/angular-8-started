import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-actes',
  templateUrl: './users-actes.component.html',
  styleUrls: ['./users-actes.component.css']
})
export class UsersActesComponent implements OnInit {

  @Input('list-actes') actes = [];
  
  constructor() { }

  ngOnInit() {
  }

}
