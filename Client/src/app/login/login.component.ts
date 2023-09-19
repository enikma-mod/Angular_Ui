import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.isLoginPage = true;
  }
}
