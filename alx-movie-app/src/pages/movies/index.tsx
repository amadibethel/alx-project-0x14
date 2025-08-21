// src/pages/movies/index.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/components/commons/Button";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import Loading from "@/components/commons/Loading";

const MoviesPage: React.FC = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [genre, setGenre] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/fetch-movies");
        const data: MoviesProps[] = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genre]);

  return (
    <div className="movies-page">
      {/* Genre Buttons */}
      <div className="genre-buttons flex gap-4 mb-4">
        {["All", "Animation", "Comedy", "Fantasy"].map((g, index) => (
          <Button
            title={g}
            key={index}
            onClick={() => setGenre(g)}
          />
        ))}
      </div>

      {/* Movies Grid */}
      <div className="movies-grid grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            primaryImage={movie.primaryImage}
            titleText={movie.titleText}
            releaseYear={movie.releaseYear}
          />
        ))}
      </div>

      {/* Loading */}
      {loading && <Loading />}
    </div>
  );
};

export default MoviesPage;
