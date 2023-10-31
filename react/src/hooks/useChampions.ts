import { useState, useEffect } from "react";
import { ChampionData, getChampions } from "src/api/hok";

export default function useChampions() {
  const [champions, setChampions] = useState([] as ChampionData[]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let mounted = true;
    getChampions()
      .then((data) => {
        mounted && setChampions(data);
      })
      .catch((e) =>
        console.error("error occured when fetching champions data.", e)
      )
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);
  return { loading, champions };
}
