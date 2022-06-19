import React from "react";

type ItemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
    items: ItemsType[]
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    const onclickItem =(value:any)=>{
        alert(`You clicked item with ID ${value}`)
    }
    return <div>
        <AccordionTitle title={props.title} onChange={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onclickItem={onclickItem}/>}
    </div>;
})

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return <div>
        <h3 onClick={props.onChange}>{props.title}</h3>
    </div>;
})

type AccordionBodyType = {
    items: ItemsType[]
    onclickItem: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyType) => {
    return <div>
        {props.items.map((e, index) => <li onClick={()=>props.onclickItem(e.value)} key={index}>{e.title}</li>)}
    </div>;
})

