import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(
    private route: Router
  ) {}

  goToLogin() {
    this.route.navigate(["/login"]);
  }
}
