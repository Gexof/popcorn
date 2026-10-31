import { Star } from "lucide-react";
import { useState } from "react";

function StarRating({ maxRating = 5, color = "#fcc419", onSetRating }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Stars
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
          />
        ))}
      </div>
      <p className={`leading-none m-0 text-[${color}]`}>
        {tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;

function Stars({ onRate, full, onHoverIn, onHoverOut, color }) {
  return (
    <span
      role="button"
      className="cursor-pointer"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? <Star color={color} fill={color} /> : <Star color={color} />}
    </span>
  );
}
