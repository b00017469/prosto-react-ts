import {useEffect, useState} from "react";
import "./styles.css";

type ClockType = {
    isAnalog: boolean
}

export const Clock = (props: ClockType) => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
            const intervalId = setInterval(() => {
                setTime(new Date())
            }, 1000)
            return () => {
                clearInterval(intervalId)
            }
        }
        , [])

    const formatTime = (time: number) => {
        return time <= 9 ? '0' + time : time
    }
    const hours = formatTime(time.getHours())
    const minutes = formatTime(time.getMinutes())
    const seconds = formatTime(time.getSeconds())
    const secondsStyle = {
        transform: `rotate(${Number(seconds) * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${Number(minutes) * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${Number(hours) * 30}deg)`
    };
    return <>
        <div className={"clock"}>
            {props.isAnalog ?
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle}/>
                    <div className={"dial minutes"} style={minutesStyle}/>
                    <div className={"dial hours"} style={hoursStyle}/>
                </div>
                :
                <div className={"digital-clock"}>
                    {hours}:{minutes}:{seconds}
                </div>}
        </div>
    </>
}