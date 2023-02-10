import DayTemp from "./day-temp"

const WeekTemp = ({info}) =>{
    return(
        <div>
            <div className="bold">
            <p id="dayTemp">Date  <span id="min">Min</span>  <span id="max">Max</span></p>
            </div>
            {info.map((day)=>{
                return <DayTemp date={day[0]} min={day[1]} max={day[2]} />
            })}
        </div>  
    )
}

export default WeekTemp