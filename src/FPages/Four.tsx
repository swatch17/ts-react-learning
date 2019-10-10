import * as React from 'react';

type Props = {
    className?: string;
    style?: React.CSSProperties;
};

const Four: React.FC<Props> = props => {

    const { children, ...resetProps } = props

    return (
        <div {...resetProps}>
            {console.log(resetProps)}
            <p>{children}</p>
            <p>Four</p>
        </div>
    )
}
export default Four