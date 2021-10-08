const Statistics = ({good, bad, neutral}) => {
    console.log(good && bad && neutral)
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
                <tr>
                    <td colSpan='2'><p>No feedback given</p></td>
                </tr>
        )
    }
    let all = good + bad + neutral
    let top = good - bad

    return (
        <>
            <tr>
                <td>Average:</td><td>{top / all }</td>
            </tr>
            <tr>
                <td>Positive: </td><td>{(good / all ) * 100} %</td>
            </tr>
        </>
    )

}

export default Statistics