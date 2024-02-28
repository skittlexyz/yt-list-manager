import { ReactNode } from 'react';

interface ParentComponentProps {
    children: ReactNode;
}

function VideoContainer(props: ParentComponentProps) {
    return (
        <div className='flex flex-wrap gap-y-[20px] justify-between pt-[175px] 2xl:pt-[200px] xl:pt-[200px] lg:pt-[200px] md:pt-[185px]'>
            {props.children}
        </div>
    )
}

export default VideoContainer