import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoginPage: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.isLoginPage = this.sharedService.isLoginPage;
  }
}
