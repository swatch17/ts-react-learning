/*
 * @Author: schweint615 
 * @Date: 2019-10-10 14:11:22 
 * @Last Modified by: swatch17
 * @Last Modified time: 2019-10-10 14:20:39
 */

//  通用组件
import * as React from 'react'

interface GenericListProps<T>{
    items:T[];
    itemRender:(item:T)=>JSX.Element;
}

 class GenericList<T> extends React.Component<GenericListProps<T>,{}>{
    
    public render(){
        const {items,itemRender} = this.props;

        return (
            <div>
                {items.map(itemRender)}
            </div>
        )
    }
}
export default GenericList