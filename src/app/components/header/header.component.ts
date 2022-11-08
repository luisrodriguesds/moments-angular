import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  constructor(public loginService: LoginService) {
    this.loginService.isUserLogged.subscribe((value) => {
      this.isLogged = value;
    });
  }

  ngOnInit(): void {}
}
