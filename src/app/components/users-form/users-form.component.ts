import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/data';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  userId!: string;
  userObj!: IUser;
  userForm!: FormGroup;
  isInEditMode: boolean = false;

  constructor(
    private _service: UsersService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _snackBar: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.patchData();
  }

  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
      profileDescription: new FormControl(null, Validators.required),
      profileImage: new FormControl(null, Validators.required),

      address: new FormGroup({
        current: new FormGroup({
          country: new FormControl(null, Validators.required),
          state: new FormControl(null, Validators.required),
          city: new FormControl(null, Validators.required),
          zipcode: new FormControl(null, Validators.required),
        }),

        permanent: new FormGroup({
          country: new FormControl(null, Validators.required),
          state: new FormControl(null, Validators.required),
          city: new FormControl(null, Validators.required),
          zipcode: new FormControl(null, Validators.required),
        }),
      }),

      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  get SkillArray(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  onSkillAdd() {
    this.SkillArray.push(new FormControl(null, Validators.required));
  }

  onSkillRemove(i: number) {
    this.SkillArray.removeAt(i);
  }

  onAdd() {
    if (this.userForm.valid) {
      let createObj: IUser = {
        ...this.userForm.getRawValue(),
        userId: Date.now().toString(),
      };
      this._service.onAdd(createObj).subscribe({
        next: (data) => {
          this._router.navigate(['']);
          this._snackBar.snackBar(`Student Added With Name SuccessFully`);
        },
      });
    }
  }

  patchData() {
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this._service.fetchById(this.userId).subscribe({
        next: (data: IUser) => {
          this.userForm.patchValue(data);
          this.userForm.setControl(
            'skills',
            new FormArray(
              data.skills.map(
                (skill) => new FormControl(skill, Validators.required),
              ),
            ),
          );
          this.isInEditMode = true;
        },
      });
    }
  }

  onUpdate() {
    if (this.userForm.valid) {
      let createObj: IUser = {
        ...this.userForm.getRawValue(),
        userId: this.userId,
      };
      this._service.onUpdate(createObj).subscribe({
        next: (data) => {
          this._router.navigate(['/']);
          this._snackBar.snackBar(`Student Updated SuccessFully`);
        },
      });
    }
  }
}
