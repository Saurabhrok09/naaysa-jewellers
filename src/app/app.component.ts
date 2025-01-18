import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naaysa-jewellers';
  isheadervisible(){
    return window.location.pathname.startsWith('/admin')
  }
}
