import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-asisten-page',
  standalone: true,
  imports: [],
  templateUrl: './AsistenPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsistenPageComponent { }
