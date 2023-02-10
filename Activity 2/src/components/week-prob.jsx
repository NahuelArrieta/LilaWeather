const WeekProb = ({info}) =>{
    return(
        <div>
            <p>The day of the week with the highest probability of rain is {info[0]}.</p>
            <p>Probability: {info[1]}%</p>
        </div>  
    )
}

export default WeekProb