import type { Genre } from "../../types/movietype";
import style from "./poster.module.scss";
import parse from "html-react-parser";

interface PosterProps {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
  genres: Array<Genre>;
  price?: number;
}

export function Poster({
  id,
  imageUrl,
  title,
  description,
  genres,
  price,
}: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <img src={imageUrl}></img>
      <div>
        <h4>{title}</h4>
        {description && (
          <div className={style.mainDescription}>{parse(description)}</div>
        )}
        <p>Genre:</p>
        {genres &&
          genres.map((genre: Genre, index) => {
            return <span key={index}>{genre.title}</span>;
          })}
        {price && <p>Price: {price}kr</p>}
        <button>Læs mere</button>
      </div>
    </div>
  );
}
