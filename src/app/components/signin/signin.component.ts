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

  @Input() openStatus!: string;
  @Input() loginStatus!: string;
  @Output() status = new EventEmitter<string>();
  @Output() lstatus = new EventEmitter<string>();

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
        this.status.emit('hidden');
        this.lstatus.emit(this.email);
        localStorage.setItem('user', this.email);
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.lstatus.emit('Your are not logged in');
        localStorage.removeItem('user');
      }
    });
  }

  onLogin() {
    const user: User = { email: this.email, password: this.password };

    this.authService.login(user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.status.emit('hidden');
        this.lstatus.emit(this.email);
        localStorage.setItem('user', this.email);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.lstatus.emit('Your are not logged in');
        localStorage.removeItem('user');
      }
    });
  }

  onClose() {
    this.status.emit('hidden');
  }
}
