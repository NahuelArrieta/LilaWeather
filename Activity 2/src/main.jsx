import React from 'react'
import ReactDOM from 'react-dom'

//import './index.css'


function processData() {
  let latitud = document.getElementById("lt").value;
  let longitud = document.getElementById("lg").value;
  return [latitud, longitud]
  
}



const xi = document.getElementById("showWeather");
xi.addEventListener("click", ()=>{
  const coordinates = processData();

  // TODO if (!coordinates) 

  const Weather = () => {
    return (
      <>
        <p>{coordinates[0]}</p>
        <p>{coordinates[1]}</p>
      </>
    )}

  const conteiner = document.getElementById("root")
  ReactDOM.render(<Weather/> , conteiner)

 
});


