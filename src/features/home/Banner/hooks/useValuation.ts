import bannerValuation from '@/data/banner-valuation.json';
import { IBannerValuation } from '../interfaces';

export const useValuation = (): IBannerValuation[] => bannerValuation;
