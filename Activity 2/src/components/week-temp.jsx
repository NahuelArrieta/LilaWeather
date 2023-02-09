import DayTemp from "./day-temp"

const WeekTemp = ({info}) =>{
    return(
        <div>
            <DayTemp date="Date" min="min" max="max" />
            {info.map((day)=>{
                return <DayTemp date={day[0]} min={day[1]} max={day[2]}/>
            })}
        </div>  
    )
}

export default WeekTemp