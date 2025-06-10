import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonToolbar, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonInput,IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule,ReactiveFormsModule, IonItem, IonContent, IonTitle, IonHeader,IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonText, IonButton]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === 'user@example.com' && password === '123456') {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect.';
    }
  }
}
