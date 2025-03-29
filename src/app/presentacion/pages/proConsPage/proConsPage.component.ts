import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pro-cons-page',
  standalone: true,
  imports: [],
  templateUrl: './proConsPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProConsPageComponent { }
