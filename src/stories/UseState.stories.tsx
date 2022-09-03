import {useState} from "react";

export default {
    title: 'useState'
}

const initState = () => {
    console.log('call init')
    return 20
}

export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(initState)
    // const addOne = () => {
    //     console.log('addOne')
    //     return counter + 1
    // }
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}