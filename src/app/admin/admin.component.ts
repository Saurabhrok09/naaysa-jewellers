import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { MaterialUpdateModalComponent } from './material-update-modal/material-update-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  currentPanel: string = 'Panel';
  breakpoint: number = 1000;
  largeScreen: boolean = window.innerWidth > this.breakpoint;
  showSidebar: boolean = false;

  constructor(private router: Router,private databaseService:DatabaseService,private dialog:Dialog) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const urlArr = url.split('/');
        const panel = urlArr[urlArr.length - 1];
        const panelWords = panel.split('-');
        panelWords.forEach((word, index) => {
          panelWords[index] = word.charAt(0).toUpperCase() + word.substring(1);
          console.log(panelWords);
          this.currentPanel=panelWords.join(' ');
          console.log(this.currentPanel);
        });
        this.currentPanel = panelWords.join(' ');
      }
    });
  }

  ngOnInit(): void {
    this.databaseService.checkForPriceUpdate().then((update) => {
      if(!update) {
        let dialog = this.dialog.open(MaterialUpdateModalComponent)
        dialog.componentInstance?.requestCancel.subscribe((update) => {
          if(update==true) {
            dialog.close()
          }
        })
      }
    })
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
