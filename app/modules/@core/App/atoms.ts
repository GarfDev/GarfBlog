import {atom} from 'recoil';

export const themeState = atom({
  key: 'themeState', // unique ID (with respect to other atoms/selectors)
  default: (window.localStorage.getItem('theme') || '') === 'dark', // default value (aka initial value)
});
