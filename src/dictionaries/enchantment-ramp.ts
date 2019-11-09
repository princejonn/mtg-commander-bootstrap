import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild } from "../constants";

export const TransformLand: TCardArray = [
  {
    name: "Legion's Landing",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Search for Azcanta",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Arguel's Blood Fast",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Growing Rites of Itlimoc",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Vance's Blasting Cannons",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Profane Procession",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Journey to Eternity BG",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Hadana's Climb UG",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
  {
    name: "Storm the Vault UR",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Path of Mettle WR",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
];
