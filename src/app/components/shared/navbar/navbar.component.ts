import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  public defaultTheme = false;
  constructor() { }

  changeTheme() {
    this.defaultTheme ? this.defaultTheme = false : this.defaultTheme = true;
  }
}
