export interface ILogo {
  width: number;
  height: number;
  src: string;
}

export interface ILogoData {
  desktop: ILogo;
  mobile: ILogo;
}

export type TLogoTypes = keyof ILogoData;
