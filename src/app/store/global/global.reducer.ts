import { createReducer, on } from "@ngrx/store";
import { closeNav, openNav, toggleNav, changeLocale } from "./global.actions";
import { Global } from "./global.model";
import { immerOn } from 'ngrx-immer/store';

export const initialState: Global = {
  navOpen: true,
  locale: "us",
}

export const globalReducer = createReducer(initialState, 
  immerOn(toggleNav, toggleNavReducer),
  immerOn(closeNav, closeNavReducer),
  immerOn(openNav, openNavReducer),
  immerOn(changeLocale, changeLocaleReducer),
)

function toggleNavReducer(state: Global) {
  state.navOpen = !state.navOpen;
}

function closeNavReducer(state: Global) {
  state.navOpen = false;
}

function openNavReducer(state: Global) {
  state.navOpen = true;
}

function changeLocaleReducer(state: Global, { locale }: { locale: string }) {
  state.locale = locale;
}