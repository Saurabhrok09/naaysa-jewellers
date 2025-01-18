import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentPanel: string = 'Panel';
  breakpoint: number = 1000;
  largeScreen: boolean = window.innerWidth > this.breakpoint;
  showSidebar: boolean = false;
  @Input() name:string = 'Stupidita'

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        // Update header heading
        const url = this.router.url;
        const urlArr = url.split('/');
        const panel = urlArr[urlArr.length - 1];
        const panelWords = panel.split('-');
        panelWords.forEach((word, index) => {
          panelWords[index] = word.charAt(0).toUpperCase() + word.substring(1);
        });
        this.currentPanel = panelWords.join(' ');
      }
    });
   }

  ngOnInit(): void {
  }

  onWindowResize() {
    this.largeScreen = window.innerWidth > this.breakpoint;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }
}
