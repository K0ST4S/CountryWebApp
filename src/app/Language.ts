import { ILanguage } from './ILanguage';
// language data class
export class Language implements ILanguage {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}