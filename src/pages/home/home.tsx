import type { MovieData } from "../../types/movietype";
import { Title } from "../../components/title/title";
import { Poster } from "../../components/poster/poster";
import curtainImage from "../../assets/image/grafik-2/images/curtain.jpg";
import style from "./home.module.scss";
import { Grid } from "../../components/grid/grid";
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    "http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image,price",
  );
  if (isLoading) {
    return <h1>Loading data......</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <img
        className={style.homePageImage}
        src={curtainImage}
        alt="curtain_image"
      ></img>
      <Title text={"Sidste nyt..."} />
      <Grid gtc="1fr 1fr" gap={32}>
        {data &&
          data.map((item) => {
            return (
              <Poster
                key={item.id}
                genres={item.genres}
                title={item.name}
                imageUrl={item.image}
                description={item.description}
                id={item.id}
              />
            );
          })}
      </Grid>
    </>
  );
}
