const getUrl = ()=>{
    let latitude = document.getElementById("lt").value;
    let longitude = document.getElementById("lg").value;

    if (!latitude || !longitude) {
        alert("Please, enter the coordinates");
        return
    }

    if (Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
        alert("The coordinates entered are not valid");
        return
    }

    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C%20${longitude}/next7days?unitGroup=metric&key=GM9ED2D56JN99DG45BK8DWLEH&contentType=json`

}
const getWeatherInfo = ()=>{
    const API_URL = getUrl();
    if(!API_URL) return;

    return fetch(API_URL+ "&include=current")
        .then(res => res.json())
        .then(response => {
            return response.currentConditions
        });  
}


const getWeekTemp = ()=>{
    
    const API_URL = getUrl();
    if(!API_URL) return;

    return fetch(API_URL+ "&include=days")
        .then(res => res.json())
        .then(response => {
            let week = response.days;
            let info = new Array(5);
            for(let i=0; i<5; i++){
                let currentDay = week[i];
                let date = currentDay.datetime;
                let min = currentDay.tempmin;
                let max = currentDay.tempmax;
                info[i] = [date, min, max];
                
            }
            return info
        });    
}

const getDayProb = () =>{
    const API_URL = getUrl();
    if(!API_URL) return;

    return fetch(API_URL+ '&include=hours')
        .then(res => res.json())
        .then(response => {
            let info = new Array(24);
            const today = response.days[0];
            for (let i=0; i<24; i++) {
                let currentHour = today.hours[i];
                let hour = currentHour.datetime;
                let prob = currentHour.precipprob;
                info[i] = [hour, prob];
            }
            return info
        });
}


const getWeekProb = ()=>{
    const API_URL = getUrl();
    if(!API_URL) return;
    
    return fetch(API_URL+ "&include=days")
        .then(res => res.json())
        .then(response => {
            let maxProb = 0
            let week = response.days
            let day = null
            for (let i=0; i<7; i++){
                let currentDay = week[i];
                
                let currentProb = currentDay.precipprob
                if (currentProb >= maxProb){
                    
                    maxProb =  currentProb
                    day = currentDay.datetime
                }
            }
            return [day, maxProb]
        }); 
}

export {getWeekTemp, getDayProb, getWeekProb, getWeatherInfo}
