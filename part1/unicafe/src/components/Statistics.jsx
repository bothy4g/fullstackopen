

const Statistics = ({good, neutral, bad, all, positive, average}) =>{
    return(
        <>
        Statistics:
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>All: {all}</div>
        <div>Positive: {positive}%</div>
        <div>Average: {average}</div>
        </>
    )
}

export default Statistics