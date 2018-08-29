import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = undefined;
  subscription: Subscription;

  constructor(public dialog: MatDialog,
    private authService: AuthService ) { }

    ngOnInit() {
      this.authService.loadUserCredentials();
      this.subscription = this.authService.getUsername()
        .subscribe(name => { console.log(name); this.username = name; });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    openLoginForm() {
      const loginRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});

      loginRef.afterClosed()
        .subscribe(result => {
          console.log(result);
        });
    }

    logOut() {
      this.username = undefined;
      this.authService.logOut();
    }
}
