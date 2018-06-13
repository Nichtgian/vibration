import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from "@ionic-native/vibration";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  patterns: Array<{
    title: string,
    notes: Array<number>
  }>;

  constructor(public navCtrl: NavController, private vibration: Vibration) {
    this.patterns = [
      {title: "Star Wars", notes: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]},
      {title: "Power Rangers", notes: [150,150,150,150,75,75,150,150,150,150,450]},
      {title: "Ninja Turtles", notes: [75,75,75,75,75,75,75,75,150,150,150,450,75,75,75,75,75,525]}
    ];
  }

  /*ios ignores duration*/
  vibrate(sec: number) {
    this.vibration.vibrate(sec * 1000);
  }

  /*android & windows only*/
  vibratePattern() {
    this.vibration.vibrate([
      1000, //<- vibrate 1 second
      2000, //<- wait 2 seconds
      2000 //<- vibrate 2 seconds
    ]);
  }

  vibrateMusic() {
    let random: number = Math.floor(Math.random() * (this.patterns.length));
    console.log(this.patterns[random].title);
    this.vibration.vibrate(this.patterns[random].notes);
  }

  /*stop current vibration on android & windows*/
  stop() {
    this.vibration.vibrate(0);
  }
}
