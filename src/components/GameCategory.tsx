import GameCard from "./GameCard.tsx";

const GameCategory = () => {
  return (
    <view className="category">
      <text className="heading">Trending</text>

      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        className="horizontal-list"
      >
        {Array.from({ length: 50 }).map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <GameCard />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};
export default GameCategory;
