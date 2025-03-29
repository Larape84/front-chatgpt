import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ortografia-page',
  standalone: true,
  imports: [],
  templateUrl: './ortografiaPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrtografiaPageComponent { }
