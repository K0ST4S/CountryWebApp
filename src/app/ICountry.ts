import { Language } from './Language';

// interface for a country that is obtained from Rest API
export interface ICountry {
    name: string,
    capital: string,
    region: string,
    subregion: string,
    flag: string,
    area: number,
    population: number,
    languages: Array<Language>
}