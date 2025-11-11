//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"

/**
 * Vyuzitie:
 * Premena cisla  (125) z desiatkovej do dvojkovej ciselnej sustavy
 * Domaca uloha bola doplnena o niektore validacie, ktory v odovzdani ulohy 1 chybali.
 * Kod je pisany bez pouzitia matematickych funkcii.
 */

export function main() {
  let number = 125;
  let binary = "";

  if (typeof number !== "number") {
    console.log("Nie je cislom");
  } else if (number < 0) {
    console.log("Nie je kladnym cislom");
  } else if (number === 0) {
    console.log("0");
  } else {
    while (number > 0) {
      let bit = number % 2;          
      binary = bit + binary;         
      number = (number - bit) / 2;
    }
    console.log(binary);
  }
}

export function permittedInputSystems() {
  return [10];
}

export function permittedOutputSystems() {
  return [2];
}
