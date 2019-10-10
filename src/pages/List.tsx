import * as React from 'react'

interface IState {
    dataInfo: {}
}

export default class List extends React.Component<{}, IState>{

    public constructor(props: any) {
        super(props)
        this.state = {
            dataInfo: {}
        }
    }

    public componentDidMount() {
        console.log('关于郑州')
    }

    public render() {
        return (
            <div>
                List :
            </div>
        )
    }
}