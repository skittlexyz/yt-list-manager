import { ReactNode } from 'react';

interface ParentComponentProps {
    children: ReactNode;
}

function Container(props: ParentComponentProps) {
    return (
        <div className='flex relative'>
            {props.children}
        </div>
    )
}

export default Container