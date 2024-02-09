import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route:Router) {
    
  }

  validate(){
    // backend validation using HttpClient Module and post call
    this.route.navigateByUrl('home');
  }

}
