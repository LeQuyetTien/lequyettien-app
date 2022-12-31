import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  keywords = [
    "Ionic",
    "Angular",
    "Capacitor",
    "Android",
    "iOS",
    "Android Studio",
    "Xcode",
    "Google Play Console",
    "Apple Store Connect",
    "VS Code",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Wordpress",
    "Firebase",
    "Google Cloud",
    "Postman",
    "Agile",
    "Scrum",
    "Scrum Master",
    "Product Owner",
    "Team member",
    "Git",
    "Github",
    "Pull Request",
    "Review",
    "Merge"
  ];
  param = "&PC=EMMX01";

  constructor() {}

  onSearchBing() {
    this.keywords.map((keyword) => {
      // open new tab with bing search
      window.open('https://www.bing.com/search?q=' + keyword + this.param, '_blank');
      // delay 1 second
      setTimeout(() => {}, 3000);
    });
  }
}
