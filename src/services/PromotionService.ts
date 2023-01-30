import axios from './api/index';
import { Promotion } from '../entities/Promotion';

export default class PromotionService {
  async GetPromotions(): Promise<Promotion[]> {
    const res = await axios.get(`https://api.extrazone.com/promotions/list?Channel=PWA`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR'
      }
    });
    return res.data;
  }
  async GetPromotion(id: any): Promise<Promotion> {
    const res = await axios.get(`https://api.extrazone.com/promotions?Id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR'
      }
    });
    return res.data;
  }
}
