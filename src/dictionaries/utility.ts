import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild, Shard } from "../constants";

export const DefaultUtility: TCardArray = [

  // WHITE


  // BLUE


  // BLACK

  {
    name: "Dread Return",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Eternal Witness",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Regrowth",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED


  // MULTI-COLORED
];

export const CardDraw: TCardArray = [

  // WHITE

  {
    name: "Well of Lost Dreams",
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
    name: "Brainstorm",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Rhystic Study",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 4,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Ponder",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Preordain",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Night's Whisper",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Sign in Blood",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Phyrexian Arena",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Read the Bones",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Greed",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Ambition's Cost",
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
    name: "Harmonize",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Sylvan Library",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Momentous Fall",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Lifecrafter's Bestiary",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Faithless Looting",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Cathartic Reunion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const Charms: TCardArray = [

  // GUILDS

  {
    name: "Azorius Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Dimir Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Rakdos Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Gruul Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Selesnya Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Orzhov Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Izzet Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Golgari Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Boros Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Simic Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },

  // SHARDS

  {
    name: "Bant Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.BANT,
    ],
  },
  {
    name: "Esper Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.ESPER,
    ],
  },
  {
    name: "Grixis Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.GRIXIS,
    ],
  },
  {
    name: "Jund Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.JUND,
    ],
  },
  {
    name: "Naya Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.NAYA,
    ],
  },
  {
    name: "Abzan Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.ABZAN,
    ],
  },
  {
    name: "Jeskai Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.JESKAI,
    ],
  },
  {
    name: "Sultai Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.SULTAI,
    ],
  },
  {
    name: "Mardu Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.MARDU,
    ],
  },
  {
    name: "Temur Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.TEMUR,
    ],
  },
];

export const Counters: TCardArray = [

  // WHITE

  {
    name: "Teferi's Protection",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Counterspell",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Mana Drain",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Swan Song",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Negate",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK


  // GREEN

  {
    name: "Veil of Summer",
    casual: false,
    competitive: true,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Red Elemental Blast",
    casual: false,
    competitive: true,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLORED

  {
    name: "Dovin's Veto",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
];

export const SpellRamp: TCardArray = [

  // WHITE


  // BLUE


  // BLACK


  // GREEN

  {
    name: "Cultivate",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Kodama's Reach",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },


  // RED


  // MULTI-COLOR


];

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

export const Tutors: TCardArray = [

  // WHITE

  {
    name: "Enlightened Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Idyllic Tutor",
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
    name: "Mystical Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Merchant Scroll",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Demonic Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Vampiric Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Diabolic Tutor",
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
    name: "Fauna Shaman",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Natural Order",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Chord of Calling",
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
    name: "Gamble",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLOR

  {
    name: "Eladamri's Call",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Wargate",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.BANT,
    ],
  },
];
