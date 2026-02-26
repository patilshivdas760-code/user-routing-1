import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/data';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
  userArr: IUser[] = []
  constructor(private _user: UsersService) { }

  ngOnInit(): void {
    this._user.fetchAll().subscribe(res => {
      this.userArr = res
    })
  }

}
