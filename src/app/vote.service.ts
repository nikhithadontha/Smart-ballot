// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class VoteService {
//   private baseUrl = 'http://localhost:8086/api'; // Adjust the base URL as needed
//   private isUserLoggedIn = false;

//   constructor(private http: HttpClient) { }

//   setIsUserLoggedIn(): void {
//     this.isUserLoggedIn = true;
//   }

//   setIsUserLoggedOut(): void {
//     this.isUserLoggedIn = false;
//   }

//   getIsUserLoggedIn(): boolean {
//     return this.isUserLoggedIn;
//   }

//   getAllStates(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/states`);
//   }

//   registerVoter(voter: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/voters`, voter);
//   }
  
//  voteLogin2(loginForm: any): any {
//     return this.http.get('http://localhost:8086/voteLogin2/' + loginForm.emailId + "/" + loginForm.password).toPromise();
//   }
//   voteLogin3(loginForm: any): any {
//     return this.http.post('http://localhost:8086voteLogin3', loginForm).toPromise();
//   }

//   voteLogin(voter: any): Promise<any> {
//     return this.http.post(`${this.baseUrl}/login`, voter).toPromise();
//   }
// }
