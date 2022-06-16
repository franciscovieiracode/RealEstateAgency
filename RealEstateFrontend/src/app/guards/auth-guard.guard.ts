import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusComponent } from '../auth/login/login-status/login-status.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private status:LoginStatusComponent, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.status.checkIsLoggedIn() == false)   {
        this.router.navigate(['/login'], {queryParams: { returnUrl : state.url}})
        return false;
      }
        return true;   
  }
  
}
