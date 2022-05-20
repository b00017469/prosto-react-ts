import React, {useState} from "react";

type UncontrolledAccordion = {
    title: string
}
export function UncontrolledAccordion(props: UncontrolledAccordion) {
    let [collapsed, setCollapsed] = useState(true)
    const onclickHandler = () => {
      setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTitle title={props.title} onClick = {onclickHandler}/>
        {collapsed &&  <AccordionBody />}
    </div>;
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
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

