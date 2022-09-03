import {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('UseEffect first render and when counter change')
        document.title = counter.toString()
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
    </>
}

export const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}, fake: {fake}
    </>
}

export const ExampleClock = () => {
    console.log('Clock')
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    const seconds = time.getSeconds()
    return <>
        Time: {time.getHours()}:{time.getMinutes()}:{seconds <= 9 ? '0' + seconds : seconds}
    </>
}