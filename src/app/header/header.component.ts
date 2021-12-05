import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //this name should be displayed in app root file to get header
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
