import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: '<app-home></app-home>'
})
export class AppComponent {
  protected readonly title = signal('my-portfolio');
}
