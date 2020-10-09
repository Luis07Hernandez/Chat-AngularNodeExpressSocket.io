import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  User = {
    name: '',
    /*pic: ''*/
  }

  constructor(public json: JsonService) {
    this.json.getJson('https://randomuser.me/api/').subscribe((res: any) => {
      this.User.name = `${res.results[0].name.first}_${res.results[0].name.last}`;
      /*this.User.pic = res.results[0].picture.medium;*/
    });
  }

  ngOnInit(): void {
  }

}
