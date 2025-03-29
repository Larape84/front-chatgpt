import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-audio-text-page',
  standalone: true,
  imports: [],
  templateUrl: './audioTextPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioTextPageComponent { }
