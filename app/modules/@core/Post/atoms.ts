import {atom, selector} from 'recoil';
import axios from 'axios';

export const currentGist = atom({
  key: 'currentGist',
  default: '',
});

export const gistData = selector({
  key: 'gistSelector',
  get: async ({get}) => {
    const currentGistURL = get(currentGist);
    const response = await axios.get(currentGistURL);
  },
});
