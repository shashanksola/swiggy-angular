import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './User';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgIf],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  email: string = '';
  password: string = '';
  isRegistering: boolean = false;

  @Input() signinStatus!: string;
  @Input() loginStatus!: boolean;
  @Output() status = new EventEmitter<string>();
  @Output() lstatus = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  toggleMode() {
    this.isRegistering = !this.isRegistering;
  }

  onSubmit() {
    if (this.isRegistering) {
      this.onRegister();
    } else {
      this.onLogin();
    }
  }

  onRegister() {
    const user: User = { email: this.email, password: this.password };

    this.authService.register(user.email, user.password).pipe(
      tap(response => {
        console.log('User registered successfully:', response);
        this.loginStatus = true;
        this.lstatus.emit(true);
        this.status.emit('hidden');
        localStorage.setItem('user', JSON.stringify(response));
      }),
      catchError(error => {
        console.error('Registration failed', error);
        this.loginStatus = false;
        this.lstatus.emit(false);
        localStorage.removeItem('user');
        return of({ success: false, message: 'Registration failed' });
      })
    ).subscribe();
  }

  onLogin() {
    const user: User = { email: this.email, password: this.password };

    this.authService.login(user.email, user.password).pipe(
      tap(response => {
        if (response) {
          console.log('User logged in successfully:', response);
          this.loginStatus = true;
          this.lstatus.emit(true);
          this.status.emit('hidden');
          localStorage.setItem('user', JSON.stringify(response));
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        this.loginStatus = false;
        this.lstatus.emit(false);
        localStorage.removeItem('user');
        return of({ success: false, message: 'Login failed' });
      })
    ).subscribe();
  }

  onClose() {
    this.status.emit('hidden');
  }
}
