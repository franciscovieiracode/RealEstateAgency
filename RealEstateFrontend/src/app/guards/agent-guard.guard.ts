import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileRestService } from '../services/profile-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuardGuard implements CanActivate {


  constructor(private profileService: ProfileRestService, private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.profileService.showProfile().subscribe((user:any) =>{
        if(user && user.role !='agent'){
          alert("Cant add/edit property because you are not a real estate agent")
          this.router.navigate(['/'])
          return false;
        }
        else
            return false
          
      })

      return true;
}
}
