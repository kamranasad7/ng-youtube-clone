import { Directive, ElementRef, Input } from '@angular/core';
import { LocalizationService } from './localization.service';
import { Store } from '@ngrx/store';
import { State } from '../store/global/state';

@Directive({
  selector: '[localize]',
  standalone: true,
})
export class LocalizeDirective {
  @Input() localize = '';
  constructor(private el: ElementRef, private localization: LocalizationService, private store: Store<State>) {

  }

  ngOnInit() {
    this.store.select(state => state.global.locale).subscribe(async () => {
      this.el.nativeElement.innerHTML = await this.localization.localize(this.localize)
    })
  }
}
