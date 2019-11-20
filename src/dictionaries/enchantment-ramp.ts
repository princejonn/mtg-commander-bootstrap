import { TCardArray } from "../types";
import { Color } from "../enums";

export const DefaultEnchantments: TCardArray = [

  // WHITE

  {
    name: "Land Tax",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Smothering Tithe",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE


  // BLACK

  {
    name: "Black Market",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN


  // RED


  // MULTI-COLORED

];
