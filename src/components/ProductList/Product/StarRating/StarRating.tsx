interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const normalizedRating = Math.max(0, Math.min(5, rating));

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= normalizedRating ? "★" : "");
  }

  return (
    <div className="mb-2">
      {stars.map((star, index) => (
        <span key={index} className="text-yellow-400 font-black text-base mr-1">
          {star}
        </span>
      ))}
    </div>
  );
}
