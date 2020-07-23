import {AxiosResponse} from 'axios';
import {Post} from './BlogPost/types';

export interface GistsResponse extends AxiosResponse {
  data: Post[];
}
