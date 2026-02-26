import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersCardComponent } from './components/users-card/users-card.component';
import { UsersSingleCardComponent } from './components/users-single-card/users-single-card.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatChipsModule } from "@angular/material/chips";
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersDashboardComponent,
    UsersFormComponent,
    UsersCardComponent,
    UsersSingleCardComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
