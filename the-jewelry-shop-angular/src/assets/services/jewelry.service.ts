import { Injectable } from '@angular/core';
import { Jewelry } from '../../app/shared/jewelryclass';

import { JEWELRY } from '../data/jewelry';

@Injectable()
export class JewelryService {
  getJewelry(): Promise<Jewelry[]> {
    return Promise.resolve(JEWELRY);
  }
  constructor() { }

}
