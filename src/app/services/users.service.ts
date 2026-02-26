import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../model/data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userArr = [
    {
      userName: 'May',
      userId: '121',
      userRole: 'Candidate',
      profileDescription: 'Frontend developer with Angular experience.',
      profileImage: 'data:image/jpeg;base64,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' ,
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      experienceYears: 2,
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001',
        },
        permanent: {
          city: 'Latur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '413512',
        },
      },
    },
    {
      userName: 'june',
      userId: '123',
      userRole: 'Candidate',
      profileDescription: 'Frontend developer with Angular experience.',
      profileImage:
        'https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      experienceYears: 2,
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001',
        },
        permanent: {
          city: 'Latur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '413512',
        },
      },
    },
    {
      userName: 'july',
      userId: '125',
      userRole: 'Candidate',
      profileDescription: 'Frontend developer with Angular experience.',
      profileImage:
        'https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      experienceYears: 2,
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001',
        },
        permanent: {
          city: 'Latur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '413512',
        },
      },
    },
  ];

  constructor() {}

  fetchAll(): Observable<IUser[]> {
    return of(this.userArr);
  }

  fetchById(id: string): Observable<any> {
    let user = this.userArr.find((u) => u.userId === id);
    return of(user);
  }

  onAdd(user: IUser): Observable<IUser> {
    this.userArr.unshift(user);
    return of(user);
  }
  onRemove(id: string): Observable<string> {
    let value = this.userArr.findIndex((u) => u.userId === id);
    if (value > -1) {
      this.userArr.splice(value, 1);
    }
    return of(id);
  }
  onUpdate(user: IUser): Observable<IUser> {
    let getIndex = this.userArr.findIndex((u) => u.userId === user.userId);
    this.userArr[getIndex] = user;
    return of(user);
  }
}
