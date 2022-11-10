import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SellerService {
  constructor(private http: HttpClient) {}

  userSignUp(data) {
    return this.http.post('http://localhost:3000/seller', data);
  }
}
