import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  // Returns word with capital first letter
  capitalize(word): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
