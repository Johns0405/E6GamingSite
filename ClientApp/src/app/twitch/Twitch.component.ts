import { Component, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



declare const Twitch: any;

@Component({
  selector: 'Twitch',
  templateUrl: './Twitch.html',
  styleUrls: ['./Twitch.css']
})


export class TwitchComponent {

  ngOnInit() {
    var player = new Twitch.Embed("twitch-embed", {
      width: 480,
      height: 940,
      channel: "e6gaming",
      theme: "dark"
    });
    var player = new Twitch.Embed("twitch-embed2", {
      width: 480,
      height: 940,
      channel: "monstercat",
      theme: "dark"
    });
  }



}
