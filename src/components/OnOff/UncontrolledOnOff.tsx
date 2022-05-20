import React, {useState} from 'react';


export const UncontrolledOnOff = () => {

    const [isOn, setIsOn] = useState(false)
    console.log(isOn)
    const onStyle = {
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: isOn ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        margin: "5px",
        padding: "2px",
        backgroundColor: isOn ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: isOn ? "green" : "red"
    }
    return (
        <div>
            <span style={onStyle} onClick={()=>setIsOn(true)}>On</span>
            <span style={offStyle} onClick={()=>setIsOn(false)}>Off</span>
            <span style={indicatorStyle}></span>
        </div>
    );
};
