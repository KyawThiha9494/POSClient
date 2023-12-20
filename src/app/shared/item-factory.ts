import { Item } from '../models/item';
import { ItemConfig } from '../models/item-config';
import { Motorcycle } from '../models/motorcycle';

export function createItem(config: ItemConfig): Item {
  switch (config.type) {
    case 'motorcycle':
      return new Motorcycle();
    
    default:
      throw new Error(`Unsupported item type: ${config.type}`);
  }
}