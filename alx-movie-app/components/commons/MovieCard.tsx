// components/commons/MovieCard.tsx
import { MoviesProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MoviesProps> = ({ primaryImage, titleText, releaseYear }) => {
  return (
    <div className="movie-card">
      <Image
        src={primaryImage.url}
        alt={titleText.text}
        width={200}
        height={300}
      />
      <h3>{titleText.text}</h3>
      <p>{releaseYear.year}</p>
    </div>
  );
};

export default MovieCard;
