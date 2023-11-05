import { useState, useEffect, useMemo } from "react";
import {
  CHAMPION_CLASS_TO_CHINESE,
  ChampionClass,
  ChampionData,
  getChampions,
} from "src/api/hok";

export default function useChampions(championClass: ChampionClass = "ALL") {
  const [champions, setChampions] = useState([] as ChampionData[]);
  const [loading, setLoading] = useState(true);
  const filtered = useMemo(
    () =>
      championClass === "ALL"
        ? champions
        : champions.filter((champion) =>
            champion.classes.includes(CHAMPION_CLASS_TO_CHINESE[championClass])
          ),
    [champions, championClass]
  );

  useEffect(() => {
    setLoading(true);
    let mounted = true;
    getChampions()
      .then((data) => {
        mounted && setChampions(data);
      })
      .catch((e) =>
        console.error("error occurred while fetching champions data.", e)
      )
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return { loading, champions: filtered };
}
