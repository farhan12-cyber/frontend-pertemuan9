/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [film, setFilm] = useState("");
  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();

    setFilm(data);
  }
  useEffect(fetchMovie, []);
  console.log(film);
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{film.Title}</h2>
          <h3 className={styles.hero__genre}>
            {film.Genre}
          </h3>
          <p className={styles.hero__description}>
            {film.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={film.Poster}
            alt={film.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;