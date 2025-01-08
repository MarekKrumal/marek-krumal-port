"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import dotenv from "dotenv";

dotenv.config();
const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const t = useTranslations("Weather");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: "Olomouc",
              appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
              units: "metric",
            },
          }
        );
        setWeather(data);
      } catch (err) {
        setError("Chyba při načítání dat.");
      }
    };

    fetchWeather();
  }, []);

  const translateWeather = (description: string) => {
    const key = description.toLowerCase();
    return t(`weather.${key}`) || description;
  };

  return (
    <div className="relative mx-auto mt-0 max-w-3xl hidden md:block">
      <div className="group relative">
        <p className="lowercase font-mono pl-0 text-sm dark:text-indigo-100 text-indigo-500 dark:hover:text-indigo-300 hover:text-indigo-700 cursor-pointer">
          {"< "}
          {t("počasí?")}
          {" >"}
        </p>
        <div className="absolute flex flex-col left-full ml-52 dark:bg-black/0 bg-stone-50 invisible group-hover:visible z-50 ">
          {error ? (
            <div className="text-red-500 font-medium">{error}</div>
          ) : weather ? (
            <div className="text-gray-800 dark:text-gray-200 font-mono text-sm lowercase">
              <h1 className="text-sm dark:text-cyan-200 text-cyan-500">
                {t("pocasi")} ={" "}
                <span className="text-yellow-500 dark:text-yellow-300">
                  {"{"}
                </span>
              </h1>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                <span className="dark:text-cyan-200 text-cyan-500">
                  {t("stav")}:
                </span>{" "}
                {`"`}
                {translateWeather(weather.weather[0].main)}
                {`"`}
                <span className="text-white">,</span>{" "}
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                <span className="dark:text-cyan-200 text-cyan-500">
                  {t("teplota")}:
                </span>{" "}
                {`"`}
                {weather.main.temp}°C{`"`}:<span className="text-white">,</span>{" "}
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                <span className="dark:text-cyan-200 text-cyan-500">
                  {t("vlhkost")}:
                </span>{" "}
                {`"`}
                {weather.main.humidity}%{`"`}
                <span className="text-white">,</span>{" "}
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                <span className="dark:text-cyan-200 text-cyan-500">
                  {t("vítr")}:
                </span>{" "}
                {`"`}
                {weather.wind.speed}
                m/s{`"`} <br />
                <span className="text-yellow-500 dark:text-yellow-300">
                  {"}"}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-gray-500">{t("načítání")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
