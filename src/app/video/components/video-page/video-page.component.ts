import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/global/state';
import { closeNav } from 'src/app/store/global/global.actions';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../../interfaces/video.interface';
import { getVideo, videos } from '../../dummyVideos';
import { VideoThumbnailComponent } from '../video-thumbnail/video-thumbnail.component';

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatIconModule, 
    MatButtonToggleModule, 
    MatExpansionModule, 
    MatListModule, 
    VideoThumbnailComponent,
    MatMenuModule,
  ],
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent {

  video?: Video;
  videos: Video[] = videos;
  videoUrl?: SafeResourceUrl;
  notFound: boolean = false;

  constructor(state: Store<State>, route: ActivatedRoute, sanitizer: DomSanitizer) {
    state.dispatch(closeNav());
    
    route.queryParams.subscribe(e => {
      this.video = getVideo(route.snapshot.queryParamMap.get('v') ?? '');
      if(!this.video) {
        this.notFound = true;
      }
      else this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video?.id);
    })
  }
}
