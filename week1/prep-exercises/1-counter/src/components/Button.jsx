
function Button(props) {
    const onClick = props.setFunc;
    const buttonName = props.name;
    const step = props.step;
    return (
        <button className="Counter-btn" onClick={()=>onClick(step)}>{buttonName}</button>
    )
}

export default Button;