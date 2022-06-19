import React from "react";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    /**
     * Rating is numbers 0|1|2|3|4|5
     */
    value: RatingValuePropsType
    /**
     * Callback function)
     * @param value
     */
    onClick: (value: RatingValuePropsType) => void
}

export function Rating(props: RatingPropsType) {
    return <div>
        <Star selected={props.value > 0} onClick={() => props.onClick(1)}/>
        <Star selected={props.value > 1} onClick={() => props.onClick(2)}/>
        <Star selected={props.value > 2} onClick={() => props.onClick(3)}/>
        <Star selected={props.value > 3} onClick={() => props.onClick(4)}/>
        <Star selected={props.value > 4} onClick={() => props.onClick(5)}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

const Star = React.memo((props: StarPropsType) => {
    return <span onClick={props.onClick}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>;
})