/*
 * @Author: schweint615 
 * @Date: 2019-10-10 11:58:14 
 * @Last Modified by: swatch17
 * @Last Modified time: 2019-10-10 12:01:16
 */
// Class Components
import * as React from 'react'

const { Component } = React;

type Props = {
    label: string;
};

type State = {
    count: number;
}

export class Five extends Component<Props, State>{
    public constructor(props: Props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    /* public state: State = {
        count: 0
    } */

    public handkeIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    public render() {
        const { handkeIncrement } = this;
        const { label } = this.props;
        const { count } = this.state

        return (
            <div>
                <span>
                    {label}:{count}
                </span>
                <button onClick={handkeIncrement}>{`Increment`}</button>
            </div>
        )
    }
}

export default Five