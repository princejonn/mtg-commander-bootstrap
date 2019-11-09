import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild, Shard } from "../constants";

export const DefaultArtifacts: TCardArray = [
  {
    name: "Sol Ring",
    casual: true,
    competitive: true,
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
    name: "Mind Stone",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 4,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
  {
    name: "Thought Vessel",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 4,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
  {
    name: "Arcane Signet",
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
    name: "Fellwar Stone",
    casual: false,
    competitive: true,
    minColors: 3,
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
    name: "Commander's Sphere",
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
    name: "Chromatic Lantern",
    casual: true,
    competitive: false,
    minColors: 3,
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
    name: "Expedition Map",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
  {
    name: "Wayfarer's Bauble",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
];

export const Diamonds: TCardArray = [
  {
    name: "Marble Diamond",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Sky Diamond",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Charcoal Diamond",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Moss Diamond",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Fire Diamond",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const Medallions: TCardArray = [
  {
    name: "Pearl Medallion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Sapphire Medallion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Jet Medallion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Emerald Medallion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Ruby Medallion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const Signets: TCardArray = [
  {
    name: "Azorius Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Dimir Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Rakdos Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Gruul Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Selesnya Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Orzhov Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Izzet Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Golgari Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Boros Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Simic Signet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const Talismans: TCardArray = [
  {
    name: "Talisman of Progress",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Talisman of Dominance",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Talisman of Indulgence",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Talisman of Impulse",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Talisman of Unity",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Talisman of Hierarchy",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Talisman of Resilience",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Talisman of Curiosity",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Talisman of Creativity",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Talisman of Conviction",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const Obelisks: TCardArray = [
  {
    name: "Obelisk of Jund",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.JUND,
    ],
  },
  {
    name: "Obelisk of Bant",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.BANT,
    ],
  },
  {
    name: "Obelisk of Naya",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.NAYA,
    ],
  },
  {
    name: "Obelisk of Grixis",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.GRIXIS,
    ],
  },
  {
    name: "Obelisk of Esper",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.ESPER,
    ],
  },
];

export const Banners: TCardArray = [
  {
    name: "Sultai Banner",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.SULTAI,
    ],
  },
  {
    name: "Temur Banner",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.TEMUR,
    ],
  },
  {
    name: "Mardu Banner",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.MARDU,
    ],
  },
  {
    name: "Jeskai Banner",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.JESKAI,
    ],
  },
  {
    name: "Abzan Banner",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.ABZAN,
    ],
  },
];
