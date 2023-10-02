import data from '@/data/logo.json';
import { ILogo, ILogoData, TLogoTypes } from '../interface';

const logoData: ILogoData = data;

export const useLogoData = (variant: TLogoTypes): ILogo => logoData[variant];
