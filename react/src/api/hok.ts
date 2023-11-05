import herosData from "./data/heros.json";
import skinsData from "./data/skins.json";

export type ChampionData = {
  id: number;
  /**
   * examples: "姬小满"
   */
  name: string;
  /**
   * examples: "武道奇才"
   */
  alias: string;
  /**
   * examples: "geya"
   */
  pinyin: string;
  /**
   * examples: "三分之地", "逐鹿", "云中漠地"
   */
  region: string;
  /**
   * examples: "法师", "战士/刺客"
   */
  classes: string;
  img: string;
  skins: ChampionSkinData[];
};

export type ChampionClass =
  | "ALL"
  | "TANK"
  | "WARRIOR"
  | "MAGE"
  | "ASSASSIN"
  | "MARKSMAN"
  | "SUPPORT";

export const CHAMPION_CLASS_TO_CHINESE: { [key in ChampionClass]: string } = {
  ALL: "全部",
  TANK: "坦克",
  WARRIOR: "战士",
  MAGE: "法师",
  ASSASSIN: "刺客",
  MARKSMAN: "射手",
  SUPPORT: "辅助",
};

export async function getChampions(): Promise<ChampionData[]> {
  const data = herosData;

  const skinData: { [id: string]: ChampionSkinData[] } = {};
  skinsData.forEach((item) => {
    const names =
      item.skin_name === undefined
        ? []
        : (item.skin_name.split("|") as string[]);
    const championId = item.ename;
    const skins: ChampionSkinData[] = names.map((name, i) => {
      return {
        id: i + 1,
        name,
        smallImage: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${championId}/${championId}-smallskin-${
          i + 1
        }.jpg`,
        largeImage: `https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${championId}/${championId}-bigskin-${
          i + 1
        }.jpg`,
      };
    });
    skinData[championId] = skins;
  });

  return data.yzzyxs_4880.map((item) => {
    const champion: ChampionData = {
      id: Number(item.yzzyxi_2602),
      name: item.yzzyxm_4588,
      alias: item.yzzyxc_4613,
      img: skinData[item.yzzyxi_2602][0].smallImage,
      region: item.yxqy_9100,
      pinyin: item.yxpy_7753,
      classes: item.yzzyxz_1918,
      skins: skinData[item.yzzyxi_2602],
    };

    return champion;
  });
}

export type ChampionSkinData = {
  id: number;
  name: string;
  smallImage: string;
  largeImage: string;
};
