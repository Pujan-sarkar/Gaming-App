import useGameQuery from "../hooks/usegameQuery.ts";
import GameCard from "./GameCard.tsx";

interface IGameCategory {
  id: string;
  title: string;
  query: string;
}

const GameCategory = (props: IGameCategory) => {
  const { title, query } = props;
  const { data: games, isPending, error } = useGameQuery(query);

  if (isPending) return <text>LOADING...</text>;

  if (error) return <text>error: {error.message}</text>;
  console.log(games);

  return (
    <view className="category">
      <text className="heading">{title}</text>

      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        className="horizontal-list"
      >
        {games?.map((game, index) => {
          return (
            <list-item
              item-key={`list-item-${game.id}`}
              key={`list-item-${game.id}`}
            >
              <GameCard {...game} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};
export default GameCategory;
