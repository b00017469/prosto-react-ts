import React, {useState} from "react";


export function UncontrolledRating() {
    const [value, setValue] = useState(2)
    return <div>
        <Star selected={value > 0} onClick = {()=>setValue(1)}/>
        <Star selected={value > 1} onClick = {()=>setValue(2)}/>
        <Star selected={value > 2} onClick = {()=>setValue(3)}/>
        <Star selected={value > 3} onClick = {()=>setValue(4)}/>
        <Star selected={value > 4} onClick = {()=>setValue(5)}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    onClick: ()=>void
}

function Star(props: StarPropsType) {

    return <span onClick={props.onClick}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>;
}