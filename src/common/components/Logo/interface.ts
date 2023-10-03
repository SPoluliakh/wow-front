export interface ILogo {
  width: number;
  height: number;
  src: string;
}

export interface ILogoData {
  desktop: ILogo;
  tablet: ILogo;
  mobile: ILogo;
  banner: ILogo;
}

export type TLogoTypes = keyof ILogoData;
