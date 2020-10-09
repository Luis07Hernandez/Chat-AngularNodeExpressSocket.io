import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  userChat={
    user: '',
    text: '',
    /*pic: ''*/
  }

  myMessages;
  eventName = "send-message";

  constructor(private activated:ActivatedRoute, private webService : WebSocketService) {
    this.myMessage();
  }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id;

    this.webService.listen('text-event').subscribe((data) => {
      this.myMessages = data;
    })
  }

  myMessage(){
    this.webService.emit(this.eventName, this.userChat);
    this.userChat.text = '';
  }

}
