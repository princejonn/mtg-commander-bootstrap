import { TCardArray } from "../types";
import { Color } from "../enums";

export const Creatures: TCardArray = [

  // WHITE


  // BLUE


  // BLACK


  // GREEN


  // RED


  // UNCOLORED

  {
    name: "Solemn Simulacrum",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },

  // MULTI-COLORED

];

export const CreatureRamp: TCardArray = [

  // WHITE


  // BLUE


  // BLACK


  // GREEN

  {
    name: "Birds of Paradise",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED


  // UNCOLORED


  // MULTI-COLORED

];
