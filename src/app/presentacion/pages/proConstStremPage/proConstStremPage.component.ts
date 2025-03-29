import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pro-const-strem-page',
  standalone: true,
  imports: [],
  templateUrl: './proConstStremPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProConstStremPageComponent { }
