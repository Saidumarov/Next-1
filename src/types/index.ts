export interface ProductT {
  population: string;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
  };
}

export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: string;
  region: string;
  capital: string;
  languages: string[];
  ccn3: string;
  subregion: string;
  borders: string[];
  cca3: string;
}

export interface StateData {
  state: {
    data2: Country[] | null;
    setData: any;
  };
}
