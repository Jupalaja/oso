export interface Country {
  flags: Flags;
  name: Name;
  population: number;
  region: Region;
}
export interface Flags {
  png: string;
  svg: string;
}
export interface Name {
  common: string;
  official: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}
