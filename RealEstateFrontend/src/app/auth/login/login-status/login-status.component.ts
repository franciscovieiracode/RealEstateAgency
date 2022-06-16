import { Component  } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { straightThroughStringTask } from 'simple-git/src/lib/tasks/task';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})

export class LoginStatusComponent {
  

  // false = not logged in, true = logged in

  checkIsLoggedIn(){

    let isLoggedIn:boolean = false

    if (localStorage.getItem('currentUser')!=null)
      isLoggedIn =true


    return isLoggedIn;
  }

}
