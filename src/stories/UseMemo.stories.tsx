import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA: number
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('userSecret')
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Sveta', 'Pasha', 'Masha'])
    const newArray = useMemo(() => {
        return users.filter(user => user.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        setUsers([...users, 'Sasha' + new Date().getTime()])
    }
    return <div>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
        <button onClick={addUser}>Add user</button>
        <div>{counter}</div>
        <Users users={newArray}/>
    </div>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'JS', 'React', 'CSS'])
    const addBook = useCallback(() => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }, [books])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>

        <div>{counter}</div>
        <Books addBook={addBook}/>
    </div>
}

const BooksSecret = (props: { addBook: ()=>void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>Add book</button>
    </div>
}
const Books = React.memo(BooksSecret)