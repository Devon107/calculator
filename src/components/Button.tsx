type Props = {
    name?: string
    onClick?: () => void
    className?: string
}

const Button = ({name, className, onClick}: Props) => {
    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;