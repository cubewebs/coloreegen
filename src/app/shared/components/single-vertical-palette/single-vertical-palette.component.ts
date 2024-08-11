import {Component, effect, inject, OnInit} from '@angular/core';
import {RandomColorService} from "../../services/random-color.service";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-single-vertical-palette',
  standalone: true,
  imports: [MatIconModule, NgIf],
  templateUrl: './single-vertical-palette.component.html',
  styleUrl: './single-vertical-palette.component.scss'
})
export class SingleVerticalPaletteComponent implements OnInit{

  randomColorService = inject(RandomColorService);
  isChangeColors = false;
  randomColor!: string;
  isCopied = false;

  ngOnInit(): void {
    this.randomColorChange()
  }

  effect = effect(() => {
    this.isChangeColors = this.randomColorService.getColor()
    this.randomColorChange()
  }, {allowSignalWrites: true})

  randomColorChange() {
    this.randomColor = Math.floor(Math.random() * 0xffffff).toString(16).toString().toUpperCase()
    this.randomColorService.setColor(false)
  }

  onCopy() {
    navigator.clipboard.writeText(`#${this.randomColor}`);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false
    }, 1000)
  }
}
