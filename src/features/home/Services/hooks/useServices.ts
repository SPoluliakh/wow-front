import services from '@/data/services.json';
import { IServices } from '../interfaces';

export const useServices = (): IServices[] => services;
