import {selector} from 'recoil';
import {GistsResponse} from './types';
import axios from 'axios';

export const allGistSelector = selector({
  key: 'allGits',
  get: async () => {
    const response: GistsResponse = await axios.get('https://api.github.com/users/GarfDev/gists');
    return response;
  },
});
