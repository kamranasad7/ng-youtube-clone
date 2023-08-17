import { createAction, props } from '@ngrx/store';

export const toggleNav = createAction('toggleNav');
export const closeNav = createAction('closeNav');
export const openNav = createAction('openNav');
export const changeLocale = createAction('changeLocale', props<{ locale: string }>());