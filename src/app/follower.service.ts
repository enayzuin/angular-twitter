import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {


  followersUrl = 'http://localhost:8080/users'
  sendMessageUrl = 'http://localhost:8080/sendMessage'

  constructor(private http: HttpClient) { }



  sendDirectMessage(followers: Array<any>) {
    console.log(followers[0])
    for (var i = 0; i < followers.length; i++) {
      console.log(followers[i]);
      this.http.post<any[]>(`${this.sendMessageUrl}`, followers[i]).subscribe(res=>res);
   }
   return this.http.post<any[]>(`${this.sendMessageUrl}`, followers[i]);
  }



  async listarFollowers() {

    return await this.http.get<any[]>(`${this.followersUrl}`).toPromise();

  }


  async followPeople(followerName: any) {

    console.log('Nome do usuario a ser seguido: ' + followerName)
    const request = { screenName: followerName };
    console.log(request);
  
    return await this.http.post<any[]>(`${this.followersUrl}`, request).toPromise();

  }





}
