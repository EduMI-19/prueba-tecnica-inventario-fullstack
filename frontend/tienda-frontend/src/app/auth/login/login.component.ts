import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  @Output() userChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() register : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder, private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Credenciales:', this.loginForm.value);
      this.userChanged.emit(this.loginForm.value.usuario); 
      this.router.navigate(['/dashboard/producto']);
    }
  }
  
  onRegister():void {
    this.router.navigate(['/register']);

  }
}
