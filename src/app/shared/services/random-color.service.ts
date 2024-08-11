import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  private _color = signal<string>('')
  private _buttonClicked = signal<boolean>(false)

  constructor() { }

  getRandomColor() {
    return Math.floor(Math.random() * 0xffffff).toString(16);
  }

  setColor(value: boolean) {
    this._buttonClicked.update(() => value)
    this._color.update(() => this.getRandomColor())
  }

  getColor () {
    return this._buttonClicked()
  }
}
