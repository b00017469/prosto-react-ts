import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} onChange = {props.onClick}/>
        {!props.collapsed && <AccordionBody/>}
    </div>;
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick={props.onChange}>{props.title}</h3>
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

