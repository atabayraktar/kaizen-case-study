import axios from './api/index';
import { Tag } from '../entities/Tag';

export default class TagService {
  async GetTags() : Promise<Tag[]> {
    const res = await axios.get(`https://api.extrazone.com/tags/list`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR'
      }
    });
    return res.data;
  }
}
