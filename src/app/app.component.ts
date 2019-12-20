import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-reddit-client';

  constructor(public authService: AuthService) {}

  logout()
  {
    this.authService.logout();
  }
  login(){
    console.log("éjfél után mondok egy imát, talán eljön hozzám az új szívidomár :^)))))");
  }
}
