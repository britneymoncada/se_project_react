import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { useState } from "react";

function Main({ weatherData, handleCardClick, cards }) {
  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems={cards}
      />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {cards
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
