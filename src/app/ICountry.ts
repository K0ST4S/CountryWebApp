import { Language } from './Language';

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