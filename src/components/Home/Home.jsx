import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    if (newValue.length < 3) {
      getCurrentLocationWeather();
    } else {
      getData(newValue);
    }
  };

  async function getData(value) {
    if (value) {
      try {
        let response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=7b54519a12784cae841225931230508&q=${value}&days=3
        `);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  }

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            let response = await axios.get(
              `https://api.weatherapi.com/v1/forecast.json?key=7b54519a12784cae841225931230508&q=${latitude},${longitude}&days=3
            `);
            setWeatherData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  useEffect(() => {
    if (firstCardRef.current) {
      const firstCardHeight = firstCardRef.current.getBoundingClientRect().height;
      if (secondCardRef.current && thirdCardRef.current) {
        secondCardRef.current.style.height = `${firstCardHeight}px`;
        thirdCardRef.current.style.height = `${firstCardHeight}px`;
      }
    }
  }, [weatherData]);

  return (
    <>
      <header className="py-5">
        <div className="search position-relative">
          <input
            type="text"
            placeholder="Find your location..."
            value={searchValue}
            onChange={handleSearchChange}
            className="form-control w-75 py-3 mx-auto rounded-pill mt-5"
            id="search"
          />
          <button
            id="submit"
            className="rounded-pill py-2 px-5 bg-info text-white btn position-absolute"
            onClick={() => getData(searchValue)}
          >
            Find
          </button>
        </div>
        <div className="container mt-5">
          <div className="row g-3">
            {weatherData &&
              weatherData.forecast.forecastday.map((day, index) => (
                <div className="col-md-4" key={index}>
                  {index === 0 && (
                    <div className="card border-0 rounded-3 p-0" ref={firstCardRef}>
                      <div className="cardUp rounded-3 text-white d-flex justify-content-between align-items-center w-100 p-2">
                        <p className="p-0 m-0">
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "long",
                          })}
                        </p>
                        <p className="p-0 m-0">
                          {new Date(day.date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          {weatherData.location.name}
                        </h5>
                        <h1 className=" degree-one text-center text-white">
                          {day.day.avgtemp_c}°C
                        </h1>
                        {weatherData.current && (
                          <img
                            src={"https:" + weatherData.current.condition.icon}
                            className="w-25"
                            alt="weather condition icon"
                          />
                        )}
                        <p className="condition-text">
                          {weatherData.current && weatherData.current.condition.text}
                        </p>
                        <ul className="d-flex justify-content-around align-items-center">
                          <li className="fw-bolder">
                            <i className="fa-solid fa-umbrella me-1"></i>
                            {day.day.daily_chance_of_rain}%
                          </li>
                          <li className="fw-bolder">
                            <i className="fa-solid fa-wind me-1"></i>
                            {day.day.maxwind_kph}km/h
                          </li>
                          <li className="fw-bolder">
                            <i className="fa-regular fa-compass me-2"></i>East
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="card second border-0 rounded-3 p-0" ref={secondCardRef}>
                      <div className="secondCardUp rounded-3 text-white w-100 p-2">
                        <p className="p-0 m-0 text-center">
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "long",
                          })}
                        </p>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-center align-content-center">
                          {weatherData.current && (
                            <img
                              src={"https:" + weatherData.current.condition.icon}
                              className="w-25 my-3"
                              alt="weather condition icon"
                            />
                          )}
                        </div>
                        <h1 className="text-center h3 fw-bolder text-white my-3">
                          {day.day.avgtemp_c}°C
                        </h1>
                        <h1 className="text-center h6 my-3">
                          {day.day.mintemp_c}°C
                        </h1>
                        <p className="condition-text text-center my-5">
                          {day.day.condition.text}
                        </p>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="card third border-0 rounded-3 p-0" ref={thirdCardRef}>
                      <div className="cardUp rounded-3 text-white w-100 p-2">
                        <p className="p-0 m-0 text-center">
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "long",
                          })}
                        </p>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-center align-content-center">
                          {weatherData.current && (
                            <img
                              src={"https:" + weatherData.current.condition.icon}
                              className="w-25 my-3"
                              alt="weather condition icon"
                            />
                          )}
                        </div>
                        <h1 className="text-center h3 fw-bolder text-white my-3">
                          {day.day.avgtemp_c}°C
                        </h1>
                        <h1 className="text-center h6 my-3">
                          {day.day.mintemp_c}°C
                        </h1>
                        <p className="condition-text text-center my-5">
                          {day.day.condition.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </header>
    </>
  );
}