import { useQuery } from "@tanstack/react-query";
import type { IGamePreview } from "../types.ts";

const useGameQuery = (query:string) => {
    const getQueriedGames = async():Promise<IGamePreview[]> => {

        const response = await fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                "client-id": "m8vu5wd2196bd68wxii9rn11hw8098",
                Authorization: "Bearer ua2gg039rj0te4lxhw1o48i576rs4r",
                "Content-Type": "text/plain",
                Accept: "application/json",
            },
             body: query,
        });
         const data = await response.json();
         return data;
    }

    return useQuery({
        queryKey: ["queriedGames", query],
        queryFn: getQueriedGames

    })
}

export default useGameQuery;
