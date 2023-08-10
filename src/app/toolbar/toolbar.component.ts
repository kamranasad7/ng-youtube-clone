import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/global/state';
import { toggleNav } from '../store/global/global.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatMenuModule, MatDividerModule, RouterLink]
})
export class ToolbarComponent {

  constructor(private state: Store<State>) { }
  
  toggleNav() {
    this.state.dispatch(toggleNav())
  }
}
