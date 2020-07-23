import {AxiosResponse} from 'axios';

export interface GistResponse extends AxiosResponse {
  data: string;
}
