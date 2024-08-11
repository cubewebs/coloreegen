import {ChangeDetectorRef, Component, inject, OnDestroy} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MediaMatcher} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatListModule, MatFormField, MatInput, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  media = inject(MediaMatcher);
  changeDetectorRef = inject(ChangeDetectorRef);
  fillerNav = [
    {name: 'Color Generator', routerLink: '/', routerLinkActive: "active", icon: "home"},
    {name: 'About', routerLink: '/about', routerLinkActive: "active", icon: "home"},
    {name: 'Contact', routerLink: '/contact', routerLinkActive: "active", icon: "home"},
  ];

  private readonly _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList = this.media.matchMedia('(max-width: 600px)');
  constructor() {
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
