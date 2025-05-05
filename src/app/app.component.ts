import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from './components/navbar/navbar-component/navbar-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'la-terracita-frontend';
}