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

    const [time, setTime] = useState(new Date())

    useEffect(() => {
            console.log('use')
            const intervalId = setInterval(() => {
                console.log('Clock')
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
    return <>
        Time: {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
    </>
}

export const Example4 = () => {
    console.log('Example4')
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return ()=> {window.removeEventListener('keypress', handler)}
    }, [text])

    return <>
        Hello, counter: {text}

    </>
}

export const Example5 = () => {
    console.log('Example5')
    const [text, setText] = useState('')

    useEffect(() => {
      const timeoutID= setTimeout(()=>{
           console.log('timeout')
           setText('3 sec left')
       }, 3000)
        return ()=> {clearTimeout(timeoutID)}
    }, [text])

    return <>
        Hello, counter: {text}

    </>
}