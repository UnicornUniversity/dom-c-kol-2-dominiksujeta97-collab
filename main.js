//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"

/**
 * Vyuzitie:
 * Premena cisla z desiatkovej (10) do dvojkovej (2) ciselnej sustavy
 * bez pouzitia metod toString(numberSystem) a Number.parseInt(number, numberSystem).
 * Domaca uloha bola doplnena o zakladne validacie vstupu.
 *
 * @param {string} inputNumber - cislo, ktore sa ma konvertovat
 * @param {number} inputNumberSystem - sustava, z ktorej prevadzame (10)
 * @param {number} outputNumberSystem - sustava, do ktorej prevadzame (2)
 * @returns {string} - prekonvertovane cislo alebo text chyby
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  let number = Number(inputNumber);
  let binary = "";
  //Validacia
  if (typeof number !== "number") {
    return "Chyba: vstup nie je cislo";
  }

  if (number < 0) {
    return "Chyba: cislo musi byt kladne";
  }
  
  if (!Number.isInteger(number)) {
    return "Chyba: cislo musi byt cele";
  }
  
  if (number === 0) {
    return "0";
  }
  //Prevod
  while (number > 0) {
    let bit = number % 2;          // zvysok po deleni dvomi 
    binary = bit + binary;         // pridame zvysok na zaciatok 
    number = (number - bit) / 2;   // ekvivalent delenia dvomi
  }

  return binary;
}
export function permittedInputSystems() {
  return [10];
}
export function permittedOutputSystems() {
  return [2];
}
