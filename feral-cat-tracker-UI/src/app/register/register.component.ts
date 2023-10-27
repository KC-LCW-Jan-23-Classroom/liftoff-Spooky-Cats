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
import Validation from './utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;
  submitted = false;
  constructor(private authService: AuthServiceService) {}
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
        phoneNumber: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
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
        console.log(result.message + ' All good');
        {
          alert(result.message);
        }
      },
      (error) => {
        console.log('Error here ' + error.message);
        alert('User already exists.');
      }
    );
  }
}


