import { Component } from '@angular/core';

@Component({
  selector: 'zet-root',
  template: `
    <div class="ball" zetFadeInOut [show]="show"></div>

    <div>
      <button (click)="show = true">Show</button>
      <button (click)="show = false">Hide</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = true;
}
