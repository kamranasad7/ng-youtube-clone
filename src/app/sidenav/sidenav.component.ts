import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { navConfig } from './config'
import { Router } from '@angular/router';
import { LocalizePipe } from '../localization/localize.pipe';
import { LocalizeDirective } from '../localization/localize.directive';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule, MatButtonModule, MatIconModule, LocalizePipe, LocalizeDirective],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  config = navConfig;
  activeUrl = "";
  constructor(private router: Router) {
    this.activeUrl = this.router.url;
    this.router.events.subscribe(() => {
      this.activeUrl = this.router.url;
    })
  }
}
