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

  return data.yzzyxs_4880.map((item) => {
    const champion: ChampionData = {
      id: item.yzzyxi_2602,
      name: item.yzzyxm_4588,
      alias: item.yzzyxc_4613,
      img: `https:${item.yxlbfm_9398}`,
      region: item.yxqy_9100,
      pinyin: item.yxpy_7753,
      classes: item.yzzyxz_1918,
    };

    return champion;
  });
}
