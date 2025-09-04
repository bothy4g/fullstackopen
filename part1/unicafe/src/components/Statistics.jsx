

const Statistics = ({good, bad, neutral, all, positive, average}) =>{
    if (all > 0)
        return(
            <div>
            Statistics:
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>All: {all}</div>
            <div>Positive: {positive}%</div>
            <div>Average: {average}</div>
            </div>
        )
    else 
        return <div>No feedback given.</div>
}

export default Statistics