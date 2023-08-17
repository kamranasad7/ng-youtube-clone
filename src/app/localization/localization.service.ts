import { Injectable } from '@angular/core';
import { State } from '../store/global/state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  
  currentLocale: string = 'us';
  loadedLocales: any = { }
  loading: Promise<any> | null = null;

  constructor(store: Store<State>) {  
    store.select(state => state.global.locale).subscribe(this.onLocaleChange);
  }
  
  localize = async (key: string): Promise<string> => {
    return new Promise(async (resolve) => {
      try {
        if(this.loading) { await this.loading; }
        resolve(this.loadedLocales[this.currentLocale][key] ?? key);
      }
      catch { resolve(key) }
    })
  }

  localizeSync = (key: string, lastTranslatedValue?: string): string => {
    return this.loadedLocales[this.currentLocale]?.[key] ?? lastTranslatedValue ?? key;
  }

  onLocaleChange = async (locale: string) => {
    this.currentLocale = locale;
    console.log(`onLocaleChange: loading ../../locale/${this.currentLocale}.js`)
    this.loading = import(`../../locale/${this.currentLocale}.json`)
    this.loadedLocales[this.currentLocale] = await this.loading;
    console.log(`Locale: ${locale} loaded`)
    //this.loading = null;
  }
}
