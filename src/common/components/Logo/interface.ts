export interface ILogo {
  width: number;
  height: number;
}

export interface ILogoData {
  desktop: ILogo;
  tablet: ILogo;
  mobile: ILogo;
  banner: ILogo;
  bannerMobile: ILogo;
}

export type TLogoTypes = keyof ILogoData;
