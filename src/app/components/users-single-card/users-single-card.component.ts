import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/data';
import { UsersService } from 'src/app/services/users.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-users-single-card',
  templateUrl: './users-single-card.component.html',
  styleUrls: ['./users-single-card.component.scss']
})
export class UsersSingleCardComponent implements OnInit {
  userId!: string
  userObj!: IUser
  constructor(private _service: UsersService,
    private _routes: ActivatedRoute,
    private _matDailog: MatDialog,
    private _router: Router,
    private _snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
    this.fetchSingle()
  }

  fetchSingle() {
    this.userId = this._routes.snapshot.params['userId']
    if (this.userId) {
      this._service.fetchById(this.userId).subscribe({
        next: data => {
          this.userObj = data
        }
      })
    }
  }

  onRemove() {
    let Config = new MatDialogConfig()
    Config.data = `Are you Sure You Want To Delete ${this.userObj.userName}`
    Config.disableClose = true
    Config.width = '400px'
    let dailog = this._matDailog.open(ConfirmComponent, Config)
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this._service.onRemove(this.userId).subscribe({
          next: data => {
            this._router.navigate(['/'])
            this._snackBar.snackBar(`User Removed With Name ${this.userObj.userName}`)
          }
        })
      }
    })
  }

}
