import { Component } from '@angular/core';
import { TestCrudService } from './services/test-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-news-app';

  constructor(private crud: TestCrudService) {}

  sendDetails() {
    this.crud.send({name: 'PQR', age: 26}).subscribe(res => {
      console.log(res);
    })
  }
}