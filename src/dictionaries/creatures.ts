import { TCardArray } from "../types";
import { Color } from "../enums";

export const Creatures: TCardArray = [

  // WHITE


  // BLUE

  {
    name: "Mulldrifter",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

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
  {
    name: "Burnished Hart",
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
