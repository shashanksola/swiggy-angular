import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './User';
import { AuthService } from '../../services/auth-service.service';
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

    this.authService.register(user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.status.emit('registered');
        this.lstatus.emit(true);
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.status.emit('register_failed');
      }
    });
  }

  onLogin() {
    const user: User = { email: this.email, password: this.password };

    this.authService.login(user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.status.emit('logged_in');
        this.lstatus.emit(true);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.status.emit('login_failed');
        this.lstatus.emit(false);
      }
    });
  }

  onClose() {
    this.status.emit('hidden');
  }
}
