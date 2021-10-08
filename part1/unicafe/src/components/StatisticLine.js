const StatisticLine = ({type, value}) => {
    return (
        <tr>
            <td>{type}:</td><td> {value}</td>
        </tr>
    )
}
export default StatisticLine