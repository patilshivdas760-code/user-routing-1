import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArr = [
    {
      "userName": "May",
      "userId": "125",
      "userRole": "Candidate",
      "profileDescription": "Frontend developer with Angular experience.",
      "profileImage": "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
      "skills": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS"
      ],
      "experienceYears": 2,
      "isActive": true,
      "address": {
        "current": {
          "city": "Pune",
          "state": "Maharashtra",
          "country": "India",
          "zipcode": "411001"
        },
        "permanent": {
          "city": "Latur",
          "state": "Maharashtra",
          "country": "India",
          "zipcode": "413512"
        }
      }
    }
  ]

  constructor() { }

  fetchAll(): Observable<IUser[]> {
    return of(this.userArr)
  }

  fetchById(id: string): Observable<any> {
    let user = this.userArr.find(u => u.userId === id)
    return of(user)
  }

  onAdd(user: IUser): Observable<IUser> {
    this.userArr.unshift(user)
    return of(user)
  }
  onRemove(id: string): Observable<string> {
    let value = this.userArr.findIndex(u => u.userId === id)
    if (value > -1) {
      this.userArr.splice(value, 1)
    }
    return of(id)
  }
  onUpdate(user: IUser): Observable<IUser> {
    let getIndex = this.userArr.findIndex(u => u.userId === user.userId)
    this.userArr[getIndex] = user
    return of(user)
  }
}
