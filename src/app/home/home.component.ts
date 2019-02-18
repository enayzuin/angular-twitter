import { FollowerService } from './../follower.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  followersCount: number;
  followers = [];
  isButtonVisible = false;
  constructor(private followerService: FollowerService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    

  }

  sendDirectMessage() {
    console.log('Entrou sendDirectMessage');
    this.followerService.sendDirectMessage(this.followers).subscribe(resp => this.followers = resp);
    setTimeout(() => {
      console.log(this.followers)
      this.followersCount = this.followers.length;
    }, 6000)
  }

   listFollowers() {
    this.loading = true;
    console.log('Entrou listFollowers');
    this.followerService.listarFollowers().then(resp => {
      console.log('Resposta: ' + resp);
      this.followers = resp;
      console.log(this.followers)
      this.followersCount = this.followers.length;
      if (this.followers.length == 0) {
        this.isButtonVisible = false;
      }
      else {
        this.isButtonVisible = true;
      }
      this.loading = false;

    });

  }

}
