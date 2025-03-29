import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-tuning-page',
  standalone: true,
  imports: [],
  templateUrl: './imageTuningPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTuningPageComponent { }
