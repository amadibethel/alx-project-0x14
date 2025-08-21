// components/commons/MovieCard.tsx

import Image from "next/image";

interface MovieCardProps {
  titleText: { text: string };
  posterImage: string;
  releaseYear: string; // simple string
}

const MovieCard: React.FC<MovieCardProps> = ({ titleText, posterImage, releaseYear }) => {
  return (
    <div className="movie-card">
      <Image
        src={posterImage}
        alt={titleText.text}
        width={200}
        height={300}
      />
      <h3>{titleText.text}</h3>
      <p>{releaseYear}</p>
    </div>
  );
};

export default MovieCard;
