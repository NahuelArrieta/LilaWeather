const WeekProb = ({info}) =>{
    return(
        <div>
            <p>the day with the highest probability of rain is:</p>
            <p>{info[0]}: {info[1]}%</p>
        </div>  
    )
}

export default WeekProb