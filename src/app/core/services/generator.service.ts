import { Injectable } from '@angular/core';
import { genID } from './gen-id.service';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private idGenerator = genID();

  getNewID(): number | void {
    return this.idGenerator.next().value;
  }

  generate(amountOfSymbols: number = 10) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedString = "";

    for (let i = 0; i < amountOfSymbols; i++) {
      const randomIndex = Math.floor((Math.random() * characters.length));
      generatedString += characters.charAt(randomIndex);
    }

    return generatedString;
  }
}
