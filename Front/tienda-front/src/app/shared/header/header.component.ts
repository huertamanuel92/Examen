import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private loginSerice: LoginService,
    private router: Router) { }

  logOut(){
 
    this.loginSerice.removeLocalStorge();
    this.router.navigate(['/login']);
  }
}
