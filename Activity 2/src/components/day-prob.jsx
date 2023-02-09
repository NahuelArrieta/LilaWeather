import HourProb from "./hour-prob"

const DayProb = ({info}) =>{
    return(
        <div>
            <HourProb hour="Hour" prob="Probability of Rain"/>
            {info.map((hour)=>{
                return <HourProb hour={hour[0]} prob={hour[1]}/>
            })}
        </div>  
    )
}

export default DayProb