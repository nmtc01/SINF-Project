import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
      if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('');
        return false;
      } 
      else return true;
  }
}
