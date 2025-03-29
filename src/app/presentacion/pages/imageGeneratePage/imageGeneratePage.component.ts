import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-generate-page',
  standalone: true,
  imports: [],
  templateUrl: './imageGeneratePage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGeneratePageComponent { }
