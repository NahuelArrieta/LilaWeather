import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
//import './index.css';
import { getDayProb, getWeekTemp, getWeekProb, getWeatherInfo} from './auxiliar.js'; //??
import Weather from './components/weather';
import WeekTemp from './components/week-temp';
import DayProb from './components/day-prob';
import WeekProb from './components/week-prob';



const weekProb = document.getElementById("weekProb");
weekProb.addEventListener("click", async()=>{
  const info = await getWeekProb();
  if(!info) return;
  
  const conteiner = document.getElementById("root");
  ReactDOM.render(<WeekProb info={info}/> , conteiner);
});

const weekTemp =  document.getElementById("weekTemp");
weekTemp.addEventListener("click", async()=>{

  const info = await getWeekTemp();
  if(!info) return;
  
  const conteiner = document.getElementById("root");
  ReactDOM.render(<WeekTemp info={info}/> , conteiner);
});

const dayProb =  document.getElementById("dayProb");
dayProb.addEventListener("click", async()=>{
  const info = await getDayProb();
  if(!info) return;

  const conteiner = document.getElementById("root");
  ReactDOM.render(<DayProb info={info}/> , conteiner);

});

const weatherInfo = async()=>{
  const info = await getWeatherInfo();
  if(!info) return;
  
  const conteiner = document.getElementById("root");
  ReactDOM.render(<Weather info={info}/> , conteiner);
}

const showWeather = document.getElementById("showWeather");
showWeather.addEventListener("click", weatherInfo);

const okButton = document.getElementById("ok");
okButton.addEventListener("click", weatherInfo);