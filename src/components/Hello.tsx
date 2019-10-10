import * as React from 'react'
// import React from 'react'

interface IProps {
  title: string,
  age: number,
  work?: string,
  onMyClick:any
}

interface IState {
  count: number,
}

export default class Hello extends React.Component<IProps, IState>{
  public constructor(props: IProps) {
    super(props)
    this.state = {
      count: 1000
    }
  }

  // 實現state
  /* public readonly state: Readonly<IState> = {
    count: 1000
  } */

  public click = () => {
    this.setState({count:3000})
    console.log(134)
  }

  public sendMsg=()=>{
    this.props.onMyClick('child msg');
     console.log('event click')
  }

  public render() {
    const { title, age } = this.props
    return (
      <div>
        <p>Hello</p>
        <p>{title}--{age}</p>
        <p>{this.state.count}</p>
        <button onClick={this.click}>Click</button>
        <button onClick={this.sendMsg}>send msg</button>
      </div>
    )
  }
}