import create from "zustand";
import { getUltraSrtNcst, getVilageFcst } from "../api/Weather";

export const useWeatherStore = create((set) => ({
  weatherInfo: {
    nowTemp: 0,
    highTemp: 0,
    rowTemp: 0,
    windV: 0,
    feelTemp: 0,
  },
  setWeatherInfo: (key, value) => {
    set((state) => ({
      weatherInfo: {
        ...state.weatherInfo,
        [key]: value,
      },
    }));
  },
  fetchUltraSrtNcst: () =>
    getUltraSrtNcst()
      .then((res) => {
        const items = res.response.body.items.item;
        const currentTemperature = items.filter(
          (item) => item.category === "T1H"
        )[0].obsrValue;
        const wind = items.filter((item) => item.category === "WSD")[0]
          .obsrValue;
        set((state) => ({
          weatherInfo: {
            ...state.weatherInfo,
            windV: wind,
            nowTemp: currentTemperature,
          },
        }));
      })
      .catch((e) => console.log(e)),
  fetchVilageFcst: () =>
    getVilageFcst()
      .then((res) => {
        const items = res.response.body.items.item;
        const rowTemperature = items.filter(
          (item) => item.category === "TMN"
        )[0].fcstValue;
        const highTemperature = items.filter(
          (item) => item.category === "TMX"
        )[0].fcstValue;
        set((state) => ({
          weatherInfo: {
            ...state.weatherInfo,
            rowTemp: rowTemperature,
            highTemp: highTemperature,
          },
        }));
      })
      .catch((e) => console.log(e)),
}));
