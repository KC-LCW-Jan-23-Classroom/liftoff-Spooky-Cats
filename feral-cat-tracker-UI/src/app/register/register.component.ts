import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../authservice/auth-service.service';
import { Router } from '@angular/router';
import Validation from './utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerGroup = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl(),
        address: new FormControl(),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerGroup.controls;
  }

  registerProcess() {
    console.log('register');

    this.submitted = true;

    if (this.registerGroup.invalid) {
      this.authService;
      return;
    }

    console.log(JSON.stringify(this.registerGroup.value, null, 2));

    this.authService.register(this.registerGroup.value).subscribe(
      (result) => {
        {
          this.router.navigate(['/login']);
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
