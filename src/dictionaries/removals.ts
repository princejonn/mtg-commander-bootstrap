import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild } from "../constants";

export const Targeted: TCardArray = [

  // WHITE

  {
    name: "Path to Exile",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Swords to Plowshares",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Return to Dust",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Oblivion Ring",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Pongify",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Rapid Hybridization",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Hero's Downfall",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Murder",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 4,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Butcher of Malakir",
    casual: false,
    competitive: true,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Doom Blade",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Defile",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Beast Within",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Krosan Grip",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Naturalize",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Acidic Slime",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Chaos Warp",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Lightning Bolt",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLORED

  {
    name: "Vindicate",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Maelstrom Pulse",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Putrefy",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Terminate",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Mortify",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Dreadbore",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
];

export const Board: TCardArray = [

  // WHITE

  {
    name: "Wrath of God",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Day of Judgment",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Terminus",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Cyclonic Rift",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Damnation",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Toxic Deluge",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Mutilate",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Whirlwind",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Blasphemous Act",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLORED

  {
    name: "Merciless Eviction",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
];
