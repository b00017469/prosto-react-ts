import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type UncontrolledAccordion = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordion) {
    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})
    const onclickHandler = () => {
        dispatch({type: TOGGLE_CONSTANT})
    }
    return <div>
        <AccordionTitle title={props.title} onClick={onclickHandler}/>
        {!state.collapsed && <AccordionBody/>}
    </div>;
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick={props.onClick}>{props.title}</h3>
    </div>;
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>;
}

