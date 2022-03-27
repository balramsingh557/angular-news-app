import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCrudService {

  constructor(private http: HttpClient) { }

  send(data: any) {
    return this.http.post('https://quiz-app-4dbae-default-rtdb.asia-southeast1.firebasedatabase.app/test.json',data);
  }
}
