import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './User';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor(private http: HttpClient) { }

  email: string = '';
  password: string = '';
  apiUrl: string = 'https://6717d39db910c6a6e02a29fc.mockapi.io/login';

  @Input() signinStatus!: string;
  @Input() loginStatus!: boolean;
  @Output() status = new EventEmitter<string>();
  @Output() lstatus = new EventEmitter<boolean>();

  onSignIn() {
    const user: User = { email: this.email, password: this.password };

    this.http.post(this.apiUrl, user).pipe(
      tap(response => {
        console.log('User registered successfully', response);
        this.loginStatus = true;
        this.status.emit('hidden');
        this.lstatus.emit(true);
        localStorage.setItem('user', this.email);
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

  onClose() {
    this.status.emit('hidden');
  }
}
