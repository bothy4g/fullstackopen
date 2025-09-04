import StatisticLine from "./StatisticLine"

const Statistics = ({good, bad, neutral, all, positive, average}) =>{
    if (all > 0)
        return(
            <div>
                Statistics:
                <StatisticLine text="Good" value={good}/>
                <StatisticLine text="Neutral" value={neutral}/>
                <StatisticLine text="Bad" value={bad}/>
                <StatisticLine text="All" value={all}/>
                <StatisticLine text="Positive" value={positive + "%"}/>
                <StatisticLine text="Average" value={average}/>
            </div>
        )
    else 
        return <div>No feedback given.</div>
}

export default Statistics