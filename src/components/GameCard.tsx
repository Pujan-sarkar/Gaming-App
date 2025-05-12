import type { IGamePreview } from "../types.ts";
import { getImageUrl } from "../utils.ts";

const GameCard = (props: IGamePreview) => {
  const { id, name, cover } = props;
  return (
    <view
      className="card"
      style={{
        width: "150px",
      }}
    >
      <image src={getImageUrl(cover?.image_id)} className="image" />

      <text className="card-title">{name}</text>
    </view>
  );
};

export default GameCard;
