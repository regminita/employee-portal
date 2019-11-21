import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn= true;
  token ="";
  currentUserSubscription: Subscription;
  constructor(private authService: AuthService) { 
    this.currentUserSubscription = this.authService.currentUser.subscribe(token => {
      
      this.token = token;
    });
    
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

}
