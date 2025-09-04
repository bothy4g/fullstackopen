import StatisticLine from "./StatisticLine"

const Statistics = ({good, bad, neutral, all, positive, average}) =>{
    if (all > 0)
        return(
            <table>
                <thead><tr><td colSpan="2">Statistics</td></tr></thead>
                <tbody>
                    <StatisticLine text="Good" value={good}/>
                    <StatisticLine text="Neutral" value={neutral}/>
                    <StatisticLine text="Bad" value={bad}/>
                    <StatisticLine text="All" value={all}/>
                    <StatisticLine text="Positive" value={positive + "%"}/>
                    <StatisticLine text="Average" value={average}/>
                </tbody>
            </table>
        )
    else 
        return <div>No feedback given.</div>
}

export default Statistics