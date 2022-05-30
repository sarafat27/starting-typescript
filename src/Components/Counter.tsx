import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name: string,
    roll: number
}

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [user, setUser] = useState<User | null>(null)

    const handleIncrease = (): void => {
        setCount(count + 1)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'admin',
            roll: 77
        }
        setUser(userData)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }

    return (
        <div>
            <h1>This is count</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;