import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideoPageComponent } from './video/components/video-page/video-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'watch', component: VideoPageComponent },
  { path: '**', component: NotFoundComponent},
];
