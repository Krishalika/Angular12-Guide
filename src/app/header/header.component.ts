import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header', //this name should be displayed in app root file to get header
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void {
    //when the header component is created, data is loaded from the backend
    this.onFetch()
  }

  onSave() {
    this.backEndService.saveData();
  }

  onFetch() {
    this.backEndService.fetchData();
  }

}
