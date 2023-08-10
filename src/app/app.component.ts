import { Component, importProvidersFrom } from '@angular/core';
import { DomSanitizer, bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconRegistry } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { Router, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './routes';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LetDirective } from '@ngrx/component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { globalReducer } from './store/global/global.reducer';
import { State } from './store/global/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ToolbarComponent,
    SidenavComponent,
    RouterOutlet,
    MatSidenavModule,
    LetDirective,
  ]
})
export class AppComponent {

  navOpen$: Observable<boolean>;
  navMode: MatDrawerMode = "side";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    store: Store<State>,
  ) {

    this.navOpen$ = store.select(state => state.global.navOpen)
    this.router.events.subscribe(e => {

      this.navMode = this.router.url === '/' ? "side" : "over";
    })

    //Registering assets icons in Material
    this.matIconRegistry.addSvgIcon(`yt-logo`, this.domSanitizer.bypassSecurityTrustResourceUrl("assets/YouTube-Logo.svg"));
    this.matIconRegistry.addSvgIcon(`shorts-logo`, this.domSanitizer.bypassSecurityTrustResourceUrl("assets/shorts.svg"));
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideStore({ global: globalReducer })
  ]
});