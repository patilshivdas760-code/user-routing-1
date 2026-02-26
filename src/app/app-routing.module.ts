import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersSingleCardComponent } from './components/users-single-card/users-single-card.component';

const routes: Routes = [
  {
    path: 'user',
    component: UsersDashboardComponent
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user/add',
    component: UsersFormComponent
  },
  {
    path: 'user/:userId',
    component: UsersSingleCardComponent
  },
  {
    path: 'user/:userId/edit',
    component: UsersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
