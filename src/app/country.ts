import { Language } from './Language';

export interface Country {
    name: string,
    capital: string,
    region: string,
    subregion: string,
    flag: string,
    area: number,
    population: number,
    languages: Array<Language>
}