import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LoginService } from '../../../services/login/login.service';
import { MessageService } from '../../../services/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loadingButton: boolean = false;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
  // Precisa add change na view
  // onFileSelector(e: any) {
  //   const file: File = e.target.files[0]
  //   this.loginForm.patchValue({
  //     image: file
  //   })
  // }

  async submit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loadingButton = true;
    const { email, password } = this.loginForm.value;
    try {
      const res = await firstValueFrom(
        this.loginService.login({
          email,
          password,
        })
      );
      this.loginService.signIn(res);
      this.router.navigate(['/add-moment']);
    } catch (error) {
      console.log(error);
      this.messageService.add({
        messageTitle: 'Login Error',
        messageDescription: 'Something went wrong',
      });
    } finally {
      this.loadingButton = false;
    }
  }
}
