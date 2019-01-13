import { Component, OnInit, Inject } from '@angular/core';


import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [    expand()]
})
export class AboutComponent implements OnInit {
    leader: Leader;
    leaders: Leader[];
    errMsg: string;
  constructor(private leaderservice: LeaderService, @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
  this.leaderservice.getFeaturedLeader().subscribe((leader) =>  this.leader = leader, errmess => this.errMsg = <any>errmess);
  this.leaderservice.getLeaders().subscribe((leaders) =>  this.leaders = leaders, errmess => this.errMsg = <any>errmess);
  }

}
