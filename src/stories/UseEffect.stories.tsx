import {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(()=>{
        console.log('UseEffect every render')
        document.title=counter.toString()
    })
    useEffect(()=>{
        console.log('UseEffect only first render (componentDidMount')
        document.title=counter.toString()
    },[])
    useEffect(()=>{
        console.log('UseEffect first render and when counter change')
        document.title=counter.toString()
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
    </>
}