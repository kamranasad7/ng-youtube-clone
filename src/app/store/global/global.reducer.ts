import { createReducer, on } from "@ngrx/store";
import { closeNav, openNav, toggleNav } from "./global.actions";
import { Global } from "./global.model";
import { immerOn } from 'ngrx-immer/store';

export const initialState: Global = {
  navOpen: true
}

export const globalReducer = createReducer(initialState, 
  immerOn(toggleNav, toggleNavReducer),
  immerOn(closeNav, closeNavReducer),
  immerOn(openNav, openNavReducer),
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
