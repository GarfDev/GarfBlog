import axios from 'axios';
import {atom, selector} from 'recoil';
import {GistResponse} from './types';

export const currentGist = atom({
  key: 'currentGist',
  default: '',
});

export const gistDataSelector = selector({
  key: 'gistSelector',
  get: async ({get}) => {
    const currentGistURL = get(currentGist);
    if (currentGist) {
      try {
        const response: GistResponse = await axios.get(currentGistURL);
        return response;
      } catch {
        return undefined;
      }
    }
    return undefined;
  },
});
