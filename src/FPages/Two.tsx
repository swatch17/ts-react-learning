import * as React from 'react'

interface IUser {
    username: string;
    email?: string;
    password?: string;
}

const Two: React.FC<IUser> = (props) => {

    const [count, setCount] = React.useState(0)

    const add = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>This is Two Page</p>
            <div>
                <button onClick={add}>Add</button>
                <p> {count}</p>
                <p> {props.username}</p>
            </div>
        </div>
    )
}

export default Two