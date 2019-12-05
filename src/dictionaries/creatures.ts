import { TCardArray } from "../types";
import { Color } from "../enums";

export const Creatures: TCardArray = [

  // WHITE


  // BLUE


  // BLACK


  // GREEN


  // RED


  // UNCOLORED


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
  {
    name: "Llanowar Elves",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Elvish Mystic",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Joraga Treespeaker",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
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
