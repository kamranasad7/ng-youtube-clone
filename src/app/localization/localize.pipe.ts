import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from './localization.service';

@Pipe({
  name: 'localize',
  standalone: true,
  pure: false
})
export class LocalizePipe implements PipeTransform {

  lastTranslatedValue: string = '';

  constructor(private localization: LocalizationService) { }

  transform(value: string): string {
    return this.lastTranslatedValue = this.localization.localizeSync(value, this.lastTranslatedValue);
  }
}
