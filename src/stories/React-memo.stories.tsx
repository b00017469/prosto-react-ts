import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = React.memo((props: { count: number }) => {
    console.log('counter')
    return <div>{props.count}</div>
})

const Users = React.memo((props: { users: string[] }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Pasha', 'Masha', 'Vasilisa'])
    const addUser = () =>{
        setUsers([...users, 'Sveta'+ new Date().getTime()])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>

        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>

}