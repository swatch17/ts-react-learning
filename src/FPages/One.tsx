import * as React from 'react'

// 无状态组件
const One: React.FC =( props) => {
   console.log(props)
    return (
        <div>
            <p>Hello This is One Component</p>
        </div>
    )

}

export default One
