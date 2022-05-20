import React from 'react';

export type OnOffPropsType = {
    isOn: boolean
    onClick: (isOn: boolean) => void
}


export const OnOff = (props:OnOffPropsType) => {
    console.log("OnOff is rendering")


    const onStyle = {
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.isOn ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        margin: "5px",
        padding: "2px",
        backgroundColor: props.isOn ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: props.isOn ? "green" : "red"
    }
    return (
        <div>
            <span style={onStyle} onClick={() => props.onClick(true)}>On</span>
            <span style={offStyle} onClick={() => props.onClick(false)}>Off</span>
            <span style={indicatorStyle}></span>
        </div>
    );
};

