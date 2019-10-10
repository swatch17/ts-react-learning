import * as React from 'react'

const { useState } = React

type Props = {
    label: string;
    count: number;
    onIncrement: () => void;
};

const Three: React.FC<Props> = props => {
    const { label, count, onIncrement } = props;

    const handleIncrement = () => {
        onIncrement();
    };

    useState(() => {
        console.log('This is useState!')
    })

    return (
        <div>
            <p>This is Three Pages</p>
            <span>{label}:{count}</span>
            <button onClick={handleIncrement}>Click</button>
        </div>
    )
}

export default Three