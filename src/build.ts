import { buildCardList } from "./build-tool";
import { Color } from "./enums";
import { DOMAIN, FourColor, Guild, Shard } from "./constants";

void buildCardList("1-white", [ Color.WHITE ]);
void buildCardList("1-blue", [ Color.BLUE ]);
void buildCardList("1-black", [ Color.BLACK ]);
void buildCardList("1-green", [ Color.GREEN ]);
void buildCardList("1-red", [ Color.RED ]);

void buildCardList("2-azorius", Guild.AZORIUS);
void buildCardList("2-dimir", Guild.DIMIR);
void buildCardList("2-rakdos", Guild.RAKDOS);
void buildCardList("2-gruul", Guild.GRUUL);
void buildCardList("2-selesnya", Guild.SELESNYA);
void buildCardList("2-orzhov", Guild.ORZHOV);
void buildCardList("2-izzet", Guild.IZZET);
void buildCardList("2-golgari", Guild.GOLGARI);
void buildCardList("2-boros", Guild.BOROS);
void buildCardList("2-simic", Guild.SIMIC);

void buildCardList("3-jund", Shard.JUND);
void buildCardList("3-bant", Shard.BANT);
void buildCardList("3-naya", Shard.NAYA);
void buildCardList("3-grixis", Shard.GRIXIS);
void buildCardList("3-esper", Shard.ESPER);
void buildCardList("3-sultai", Shard.SULTAI);
void buildCardList("3-temur", Shard.TEMUR);
void buildCardList("3-mardu", Shard.MARDU);
void buildCardList("3-jeskai", Shard.JESKAI);
void buildCardList("3-abzan", Shard.ABZAN);

void buildCardList("4-non-green", FourColor.NONGREEN);
void buildCardList("4-non-red", FourColor.NONRED);
void buildCardList("4-non-black", FourColor.NONBLACK);
void buildCardList("4-non-blue", FourColor.NONBLUE);
void buildCardList("4-non-white", FourColor.NONWHITE);

void buildCardList("5-all", DOMAIN);
