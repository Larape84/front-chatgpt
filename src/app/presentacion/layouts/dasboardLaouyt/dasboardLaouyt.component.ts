import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard-laouyt',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dasboardLaouyt.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DasboardLaouytComponent implements OnInit {

  ngOnInit(): void { }

}
