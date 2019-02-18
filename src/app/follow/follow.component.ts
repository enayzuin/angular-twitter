import { FollowerService } from './../follower.service';
import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  @ContentChild('app-info-card') messageRef: ElementRef;

  followersCount: number;
  followers = [];
  target: string = 'teste';
  _follower: string;

  get follower() {

    return this._follower;
  }


  set follower(value: string) {
    this._follower = value;
  }


  novoTarget: string = 'teste22';
  isButtonVisible = false;

  constructor(private followerService: FollowerService) { }

  ngOnInit() {


  }


  followNewPeople() {

    console.log(this._follower);

    console.log('Entrou sendDirectMessage');
    this.followerService.followPeople(this._follower).then(res => {
      this.followers = res
      this.followersCount = this.followers.length;
      console.log(this.followersCount)
    });
  }

}
