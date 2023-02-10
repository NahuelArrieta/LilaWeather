import HourProb from "./hour-prob"

const DayProb = ({info}) =>{
    return(
        <div>
            <div class="bold">
            <p id="hourProb"> Hour <span> Probability of precipitation</span> </p>
            </div>
            {info.map((hour)=>{
                return <HourProb hour={hour[0]} prob={hour[1]}/>
            })}
        </div>  
    )
}

export default DayProb