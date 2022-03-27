import { Component, OnInit } from '@angular/core';
import { appName } from 'src/constants/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string = appName;
  constructor() { }

  ngOnInit(): void {
  }

}
