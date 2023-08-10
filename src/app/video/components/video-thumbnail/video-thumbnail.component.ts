import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Video } from '../../interfaces/video.interface';
import { Router } from '@angular/router';
import { State } from 'src/app/store/global/state';
import { Store } from '@ngrx/store';
import { closeNav } from 'src/app/store/global/global.actions';

@Component({
  selector: 'app-video-thumbnail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent {

  @Input() video!: Video;
  @Input() horizontal: boolean = false;

  constructor(
    private router: Router,
    private state: Store<State>
  ) { }

  redirectToVideo() {
    this.state.dispatch(closeNav());
    this.router.navigate(['watch'], { queryParams: {v: this.video.id}})
  }
}
