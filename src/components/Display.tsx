type Props = {
    value: string
}
const Display = ({value} : Props) => {
    return (
        <h3>{value}</h3>
    )
}

export default Display