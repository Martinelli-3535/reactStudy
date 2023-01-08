import create from "zustand";
import { getUltraSrtNcst, getVilageFcst } from "../api/Weather";

export const useWeatherStore = create((set)=>({
    weatherInfo:{
        nowTemp: 0,
        highTemp: 0,
        rowTemp: 0,
        feelTemp: 0,
    },
    setWeatherInfo: (key, value) => {
        set((state)=>({
            weatherInfo: {
                ...state.weatherInfo,
                [key]: value,
            }
        }));
    },
    fetchUltraSrtNcst: () => (
        getUltraSrtNcst()
            .then(res => {
              const items = res.response.body.items.item
              const currentTemperature = items.filter(
                (item) => item.category === 'T1H',
              )[0].obsrValue
              const currentWindSpeed = items.filter(
                (item) => item.category === 'WSD',
              )[0].obsrValue
              const feelTemperature = Math.round(
                (13.12 + 0.6215 * currentTemperature - 11.37 * currentWindSpeed) ^
                  (0.16 + 0.3965 * currentWindSpeed * 0.16 * currentTemperature),
              )
                set((state)=>({
                    weatherInfo: {
                        ...state.weatherInfo,
                        nowTemp: currentTemperature,
                        feelTemp: feelTemperature
                    }
                }));
            })
            .catch(e => console.log(e))
    ),
    fetchVilageFcst: () =>(
        getVilageFcst()
            .then(res => {
              const items = res.response.body.items.item
              const maxTemp = items.filter((item) => item.category === 'TMX')[0].fcstValue
              const minTemp = items.filter((item) => item.category === 'TMN')[0].fcstValue
                set((state)=>({
                    weatherInfo: {
                        ...state.weatherInfo,
                        rowTemp: minTemp,
                        highTemp: maxTemp,
                    }
                }))
            })
            .catch(e => console.log(e))
    )
}))