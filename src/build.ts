import { buildToFile } from "./utils/build-tool";
import { Color } from "./enums";
import { DOMAIN, FourColor, Guild, Shard } from "./constants";

void buildToFile("1-white", [ Color.WHITE ]);
void buildToFile("1-blue", [ Color.BLUE ]);
void buildToFile("1-black", [ Color.BLACK ]);
void buildToFile("1-green", [ Color.GREEN ]);
void buildToFile("1-red", [ Color.RED ]);

void buildToFile("2-azorius", Guild.AZORIUS);
void buildToFile("2-dimir", Guild.DIMIR);
void buildToFile("2-rakdos", Guild.RAKDOS);
void buildToFile("2-gruul", Guild.GRUUL);
void buildToFile("2-selesnya", Guild.SELESNYA);
void buildToFile("2-orzhov", Guild.ORZHOV);
void buildToFile("2-izzet", Guild.IZZET);
void buildToFile("2-golgari", Guild.GOLGARI);
void buildToFile("2-boros", Guild.BOROS);
void buildToFile("2-simic", Guild.SIMIC);

void buildToFile("3-jund", Shard.JUND);
void buildToFile("3-bant", Shard.BANT);
void buildToFile("3-naya", Shard.NAYA);
void buildToFile("3-grixis", Shard.GRIXIS);
void buildToFile("3-esper", Shard.ESPER);
void buildToFile("3-sultai", Shard.SULTAI);
void buildToFile("3-temur", Shard.TEMUR);
void buildToFile("3-mardu", Shard.MARDU);
void buildToFile("3-jeskai", Shard.JESKAI);
void buildToFile("3-abzan", Shard.ABZAN);

void buildToFile("4-non-green", FourColor.NONGREEN);
void buildToFile("4-non-red", FourColor.NONRED);
void buildToFile("4-non-black", FourColor.NONBLACK);
void buildToFile("4-non-blue", FourColor.NONBLUE);
void buildToFile("4-non-white", FourColor.NONWHITE);

void buildToFile("5-all", DOMAIN);
