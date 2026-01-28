import { useEffect, useState } from "react";
import curtainImage from "../../assets/image/grafik-2/images/curtain.jpg";
import { Title } from "../../components/title/title";
import style from "./home.module.scss";
import type { MovieType } from "../../types/movietype";
import parse from "html-react-parser";

export function Home() {
  const [movieData, setMovieData] = useState<Array<MovieType>>();

  useEffect(() => {
    const url =
      "http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  return (
    <>
      <img
        className={style.homePageImage}
        src={curtainImage}
        alt="curtain_image"
      ></img>
      <Title text={"Sidste nyt..."} />

      {movieData &&
        movieData.map((item) => {
          return (
            <div className={style.daddy} key={item.id}>
              <img width="200px" src={item.image}></img>
              <div className={style.mommy}>
                <h4>{item.name}</h4>
                <div>{parse(item.description)}</div>
                <button>Læs mere</button>
              </div>
            </div>
          );
        })}
    </>
  );
}
