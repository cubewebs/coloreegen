import {Component, inject} from '@angular/core';
import {RandomColorService} from "../../../shared/services/random-color.service";
import {
  SingleVerticalPaletteComponent
} from "../../../shared/components/single-vertical-palette/single-vertical-palette.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SingleVerticalPaletteComponent, MatButtonModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  randomColorService = inject(RandomColorService);

  onColorRndChange() {
    this.randomColorService.setColor(true)
  }
}
