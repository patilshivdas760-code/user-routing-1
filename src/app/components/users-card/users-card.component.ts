import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/data';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss'],
})
export class UsersCardComponent implements OnInit {
  @Input() userObj!: IUser[];
  constructor() {}

  ngOnInit(): void {}
}
