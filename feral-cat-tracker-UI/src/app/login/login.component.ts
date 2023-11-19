import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { AuthServiceService } from '../authservice/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginGroup!: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginGroup.controls;
  }

  loginProcess() {
    this.submitted = true;

    if (this.loginGroup.invalid) {
      this.authService;
      return;
    }

    console.log(JSON.stringify(this.loginGroup.value, null, 2));

    if (this.loginGroup.valid) {
      this.authService.login(this.loginGroup.value).subscribe(
        (result) => {
          {
            this.router.navigate(['/']);
          }

          {
            alert(result.body.message);
          }
        },
        (error) => {
          if (!error.error.message) {
            alert('Something went wrong. Please try again.');
          } else {
            alert(error.error.message);
          }
        }
      );
    }
  }
}


