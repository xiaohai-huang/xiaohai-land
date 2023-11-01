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

// enum ChampionClass {
//   Warrior,
//   Tank,
//   Assassin,
//   Mage,
//   Archer,
//   Support,
// }

export async function getChampions(): Promise<ChampionData[]> {
  const data = await fetch(
    "https://pvp.qq.com/zlkdatasys/yuzhouzhan/list/heroList.json?t=" +
      new Date().getTime()
  ).then((res) => res.json());

  const skinData: { [id: string]: ChampionSkinData[] } = {};
  (
    await fetch("https://pvp.qq.com/web201605/js/herolist.json").then((res) =>
      res.json()
    )
  ).forEach((item) => {
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
      id: item.yzzyxi_2602,
      name: item.yzzyxm_4588,
      alias: item.yzzyxc_4613,
      img: `https:${item.yxlbfm_9398}`,
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
