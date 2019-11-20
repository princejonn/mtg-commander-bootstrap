import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild, Shard } from "../constants";

export const DefaultLands: TCardArray = [
  {
    name: "Command Tower",
    casual: true,
    competitive: false,
    minColors: 2,
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
    name: "Exotic Orchard",
    casual: true,
    competitive: false,
    minColors: 2,
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
    name: "Ancient Tomb",
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
    name: "Bojuka Bog",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Cavern of Souls",
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
    name: "Rogue's Passage",
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
    name: "Buried Ruin",
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
    name: "Lake of the Dead",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Nykthos, Shrine to Nyx",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
  {
    name: "Reliquary Tower",
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
    name: "Cabal Stronghold",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Cabal Coffers",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Tolaria West",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
];

export const BasicLands: TCardArray = [
  {
    name: "Plains",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Island",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Swamp",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Forest",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Mountain",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const LegendaryLands: TCardArray = [
  {
    name: "Serra's Sanctum",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Eiganjo Castle",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Flagstones of Trokair",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Minamo, School at Water's Edge",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Academy Ruins",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Phyrexian Tower",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Shizo, Death's Storehouse",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Urborg, Tomb of Yawgmoth",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Gaea's Cradle",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Okina, Temple to the Grandfathers",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Pendelhaven",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Shivan Gorge",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Shinka, the Bloodsoaked Keep",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Kher Keep",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const DualLands: TCardArray = [
  {
    name: "Tundra",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Underground Sea",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Badlands",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Taiga",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Savannah",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Scrubland",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Volcanic Island",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Bayou",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Plateau",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Tropical Island",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const PainLands: TCardArray = [
  {
    name: "Adarkar Wastes",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Underground River",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Sulfurous Springs",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Karplusan Forest",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Brushland",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Caves of Koilos",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Shivan Reef",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Llanowar Wastes",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Battlefield Forge",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Yavimaya Coast",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
  {
    name: "Silent Clearing",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Fiery Islet",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Nurturing Peatland",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Sunbaked Canyon",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Waterlogged Grove",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const BattleLands: TCardArray = [
  {
    name: "Prairie Stream",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Sunken Hollow",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Smoldering Marsh",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Cinder Glade",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Canopy Vista",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
];

export const BondLands: TCardArray = [
  {
    name: "Sea of Clouds",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Morphic Pool",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Luxury Suite",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Spire Garden",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Bountiful Promenade",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
];

export const CheckLands: TCardArray = [
  {
    name: "Glacial Fortress",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Drowned Catacomb",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Dragonskull Summit",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Rootbound Crag",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Sunpetal Grove",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Isolated Chapel",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Sulfur Falls",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Woodland Cemetery",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Clifftop Retreat",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Hinterland Harbor",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const FastLands: TCardArray = [
  {
    name: "Seachrome Coast",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Darkslick Shores",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Blackcleave Cliffs",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Copperline Gorge",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Razorverge Thicket",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Concealed Courtyard",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Spirebluff Canal",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Blooming Marsh",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Inspiring Vantage",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Botanical Sanctum",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const RevealLands: TCardArray = [
  {
    name: "Port Town",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Choked Estuary",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Foreboding Ruins",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Game Trail",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Fortified Village",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
];

export const ShockLands: TCardArray = [
  {
    name: "Hallowed Fountain",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Watery Grave",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Blood Crypt",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Stomping Ground",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Temple Garden",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Godless Shrine",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Steam Vents",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Overgrown Tomb",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Sacred Foundry",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Breeding Pool",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 4,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const FetchLands: TCardArray = [
  {
    name: "Flooded Strand",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Polluted Delta",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Bloodstained Mire",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Wooded Foothills",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Windswept Heath",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Marsh Flats",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Scalding Tarn",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Verdant Catacombs",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Arid Mesa",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Misty Rainforest",
    casual: false,
    competitive: true,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
  {
    name: "Jund Panorama",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.JUND,
    ],
  },
  {
    name: "Bant Panorama",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.BANT,
    ],
  },
  {
    name: "Naya Panorama",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.NAYA,
    ],
  },
  {
    name: "Grixis Panorama",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.GRIXIS,
    ],
  },
  {
    name: "Esper Panorama",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 4,
    colorIdentity: [
      Shard.ESPER,
    ],
  },
  {
    name: "Prismatic Vista",
    casual: true,
    competitive: false,
    minColors: 2,
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
    name: "Myriad Landscape",
    casual: true,
    competitive: false,
    minColors: 2,
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
    name: "Terramorphic Expanse",
    casual: true,
    competitive: false,
    minColors: 2,
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
    name: "Evolving Wilds",
    casual: true,
    competitive: false,
    minColors: 2,
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

export const GuildHalls: TCardArray = [
  {
    name: "Sunhome, Fortress of the Legion",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Duskmantle, House of Shadow",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Svogthos, the Restless Tomb",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Vitu-Ghazi, the City-Tree",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Orzhova, the Church of Deals",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Nivix, Aerie of the Firemind",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Skarrg, the Rage Pits",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Prahv, Spires of Order",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Novijen, Heart of Progress",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
  {
    name: "Rix Maadi, Dungeon Palace",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
];

export const TaintedLands: TCardArray = [
  {
    name: "Tainted Field",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Tainted Isle",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Tainted Peak",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Tainted Wood",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
];

export const ShardLands: TCardArray = [
  {
    name: "Savage Lands",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.JUND,
    ],
  },
  {
    name: "Seaside Citadel",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.BANT,
    ],
  },
  {
    name: "Jungle Shrine",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.NAYA,
    ],
  },
  {
    name: "Crumbling Necropolis",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.GRIXIS,
    ],
  },
  {
    name: "Arcane Sanctum",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.ESPER,
    ],
  },
  {
    name: "Opulent Palace",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.SULTAI,
    ],
  },
  {
    name: "Frontier Bivouac",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.TEMUR,
    ],
  },
  {
    name: "Nomad Outpost",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.MARDU,
    ],
  },
  {
    name: "Mystic Monastery",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.JESKAI,
    ],
  },
  {
    name: "Sandsteppe Citadel",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 5,
    colorIdentity: [
      Shard.ABZAN,
    ],
  },
];

export const ArtifactLands: TCardArray = [
  {
    name: "Ancient Den",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Seat of the Synod",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Vault of Whispers",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Tree of Tales",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Great Furnace",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Darksteel Citadel",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.WHITE ],
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.GREEN ],
      [ Color.RED ],
    ],
  },
];

export const HideawayLands: TCardArray = [
  {
    name: "Windbrisk Heights",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Mosswort Bridge",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Spinerock Knoll",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const BounceLands: TCardArray = [
  {
    name: "Azorius Chancery",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Dimir Aqueduct",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Rakdos Carnarium",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Gruul Turf",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Selesnya Sanctuary",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Orzhov Basilica",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Izzet Boilerworks",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Golgari Rot Farm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Boros Garrison",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Simic Growth Chamber",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
];

export const FilterLands: TCardArray = [
  {
    name: "Mystic Gate",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Sunken Ruins",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Graven Cairns",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Fire-lit Thicket",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Wooded Bastion",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Fetid Heath",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Cascade Bluffs",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Twilight Mire",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Rugged Prairie",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Flooded Grove",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },
  {
    name: "Shimmering Grotto",
    casual: true,
    competitive: false,
    minColors: 4,
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
    name: "Unknown Shores",
    casual: true,
    competitive: false,
    minColors: 4,
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
    name: "Crypt of the Eternals",
    casual: true,
    competitive: false,
    minColors: 4,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
      [ Color.BLACK ],
      [ Color.RED ],
    ],
  },
];
