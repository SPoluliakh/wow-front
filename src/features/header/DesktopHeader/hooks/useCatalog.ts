import catalog from '@/data/catalog.json';
import { ICatalog } from '../../interfaces';

export const useCatalog = (): ICatalog[] => {
  return catalog;
};
