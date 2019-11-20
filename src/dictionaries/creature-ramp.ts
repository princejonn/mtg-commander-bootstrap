import { TCardArray } from "../types";
import { Color } from "../enums";

export const CreatureRamp: TCardArray = [
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
];
