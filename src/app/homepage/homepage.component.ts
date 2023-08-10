import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { VideoThumbnailComponent } from '../video/components/video-thumbnail/video-thumbnail.component';
import { Video } from '../video/interfaces/video.interface';
import { videos } from '../video/dummyVideos';
import { Store } from '@ngrx/store';
import { State } from '../store/global/state';
import { openNav } from '../store/global/global.actions';

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule, MatChipsModule, MatGridListModule, VideoThumbnailComponent],
})
export class HomepageComponent {
  videos: Video[] = videos;

  constructor(state: Store<State>) {
    state.dispatch(openNav())
  }
}
